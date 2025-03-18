import Image from "next/image";
import { Link, NextLink } from "next/link";
import { PortableText } from "next-sanity";
import { resolveHref } from "../utils/sanity/resolveHref";
import { urlFor } from "../utils/sanity/client";

const hrefResolver = ({ internalLink }) => {
  return resolveHref(internalLink._type, internalLink.slug?.current);
};

export default function PortableTextComponents({ value, className, content }) {
  const RichComponents = {
    block: ({ value, children }) => {
      const style = value.style || "normal";
      if (/^h\d/.test(style)) {
        const HeadingTag = style;
        return (
          <HeadingTag id={value._key}>
            {value.children.map((child) => (
              <span key={child._key}>{child.text}</span>
            ))}
            <a href={`#${value._key}`}>
              <span aria-hidden className="hidden">
                #
              </span>
            </a>
          </HeadingTag>
        );
      } else {
        return <p>{children}</p>;
      }
    },
    normal: ({ children }) => <p className="mx-8 text-base font-normal">{children}</p>,
    h1: ({ children }) => <h1 className="my-4 text-4xl font-extrabold">{children}</h1>,
    h2: ({ children }) => <h2 className="my-4 text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="my-4 text-2xl font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="my-4 text-xl font-normal">{children}</h4>,
    h5: ({ children }) => <h5 className="mx-8 text-lg font-medium">{children}</h5>,
    blockquote: ({ children }) => (
      <blockquote className="font-white my-4 border-l-4 border-gray pl-4 italic text-gray">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="my-4 ml-8 list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 ml-8 list-decimal">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    marks: {
      link: ({ children, value }) => (
        <Link
          link={value}
          hrefResolver={hrefResolver}
          as={NextLink}
          className="text-blue hover:text-blue-tint"
        >
          {children}
        </Link>
      ),
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => <code className="p-1">{children}</code>,
      underline: ({ children }) => <u>{children}</u>,
      highlight: ({ children }) => <span className="bg-yellow px-1">{children}</span>,
    },
    types: {
      image: ({ value, isInline }) => (
        <div>
          <Image
            className="rounded border-2 bg-light object-cover object-center p-2 shadow-md"
            src={urlFor(value)
              .width(isInline ? 100 : 800)
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alt || "No alt text provided for this image."}
            loading="lazy"
            width={800}
            height={450}
            style={{
              display: isInline ? "inline-block" : "block",
            }}
          />
          {value.caption && <p className="text-sm italic text-gray">{value.caption}</p>}
        </div>
      ),
      youtube: ({ value }) => (
        <div className="aspect-video flex-1">
          <iframe
            src={`https://www.youtube.com/embed/${value.video.id}`}
            allow="accelerometer; autoplay; clip2board-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen={true}
            className="size-full rounded border-2 bg-light object-center p-2 shadow-md"
          ></iframe>
        </div>
      ),
    },
  };

  return (
    <div className={className ? className : ""}>
      <PortableText value={value || content} components={RichComponents} />
    </div>
  );
}
