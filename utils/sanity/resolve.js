import { resolveHref } from "./resolveHref";

export const mainDocuments = [
  {
    route: "/blog/post/:slug",
    filter: `_type == "post" && slug.current == $slug`,
  },
  {
    route: "/blog/tag/:slug",
    filter: `_type == "tag" && slug.current == $slug`,
  },
];

export const locations = {
  blog: {
    message: "This document is used to render the blog page",
    tone: "positive",
    locations: [{ title: "Blog", href: resolveHref("blog") }],
  },
  post: {
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: resolveHref("post", doc?.slug),
        },
      ],
    }),
  },
  page: {
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || "Untitled",
          href: resolveHref("tag", doc?.slug),
        },
      ],
    }),
  },
};
