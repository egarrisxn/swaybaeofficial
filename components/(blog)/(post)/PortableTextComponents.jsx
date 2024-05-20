import Link from 'next/link'
import {PortableText} from 'next-sanity'
import {urlFor} from '@/sanity/lib/image'

export default function PortableTextComponents({value, className, content}) {
  const RichComponents = {
    block: ({value, children}) => {
      const style = value.style || 'normal'
      if (/^h\d/.test(style)) {
        const HeadingTag = style
        return (
          <HeadingTag id={value._key}>
            {value.children.map((child) => (
              <span key={child._key}>{child.text}</span>
            ))}
            <a href={`#${value._key}`}>
              <span aria-hidden className='hidden'>
                #
              </span>
            </a>
          </HeadingTag>
        )
      } else {
        return <p>{children}</p>
      }
    },
    normal: ({children}) => <p className='mx-8 text-base'>{children}</p>,
    h1: ({children}) => <h1 className='text my-4 text-4xl font-extrabold'>{children}</h1>,
    h2: ({children}) => <h2 className='my-4 text-3xl font-bold'>{children}</h2>,
    h3: ({children}) => <h3 className='my-4 text-2xl font-bold'>{children}</h3>,
    h4: ({children}) => <h4 className='my-4 text-xl font-bold'>{children}</h4>,
    h5: ({children}) => <h5 className='mx-8 text-lg font-bold'>{children}</h5>,
    blockquote: ({children}) => (
      <blockquote className='my-4 border-l-4 border-gray-500 pl-4 font-light italic text-gray-500'>
        {children}
      </blockquote>
    ),
    ul: ({children}) => <ul className='my-4 ml-8 list-disc'>{children}</ul>,
    ol: ({children}) => <ol className='my-4 ml-8 list-decimal'>{children}</ol>,
    li: ({children}) => <li className='mb-2'>{children}</li>,
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <Link href={value.href} rel={rel} className='text-blue-500 hover:text-blue-700'>
            {children}
          </Link>
        )
      },
      internalLink: ({children, value}) => {},
      strong: ({children}) => <strong className='font-bold'>{children}</strong>,
      em: ({children}) => <em className='italic'>{children}</em>,
      code: ({children}) => <code className='p-1'>{children}</code>,
      underline: ({children}) => <u>{children}</u>,
      highlight: ({children}) => <span className='bg-yellow-500 px-1'>{children}</span>,
    },
    types: {
      image: ({value, isInline}) => (
        <img
          className='rounded border bg-light object-cover object-center p-2 shadow-md'
          src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit('max')
            .auto('format')
            .url()}
          alt={value.alt || 'No alt text provided for this image.'}
          loading='lazy'
          width={800}
          height={450}
          style={{
            display: isInline ? 'inline-block' : 'block',
          }}
        />
      ),
      youtube: ({value}) => (
        <iframe
          src={`https://www.youtube.com/embed/${value.video.id}`}
          allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          style={{flex: 1, aspectRatio: '16 / 9'}}
          className='h-full w-full rounded-lg shadow-md'
        ></iframe>
      ),
    },
  }

  return (
    <div className={className ? className : ''}>
      <PortableText value={value || content} components={RichComponents} />
    </div>
  )
}
