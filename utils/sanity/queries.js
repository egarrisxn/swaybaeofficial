import {groq} from 'next-sanity'

const commonPostQuery = groq`
  _id,
  _createdAt,
  title,
  excerpt,
  publishedAt,
  coverImage {
    'image': asset->url,
    alt,
  },
  'tags': tags[]->{
    _id,
    'tagSlug': slug.current,
    title,
    color,
  },
`
const commonTagQuery = groq`
  _id,
  _createdAt,
  title,
  color,
`
export const POSTS_QUERY = groq`
  *[_type == 'post'] | order(_createdAt desc) {
    ${commonPostQuery}
    'postSlug': slug.current,
    featured,
  }
`
export const POST_QUERY = groq`
  *[_type == 'post' && slug.current == $slug] {
    ${commonPostQuery}
    'content': content[] {
    ...,
    markDefs[]{
      ...,
      _type == "link" => {
        ...,
        internalLink->{_type,slug,title}
      }
    }
  },
    "headings": content[length(style) == 2 && string::startsWith(style, "h")],
  }[0]
`
export const TAGS_QUERY = groq`
  *[_type == 'tag'] | order(_createdAt desc) {
    ${commonTagQuery}
    'tagSlug': slug.current,
  }
`
export const TAG_QUERY = groq`
  *[_type == 'tag' && slug.current == $slug] {
    ${commonTagQuery}
    'posts': *[_type == 'post' && references(^._id)] | order(_createdAt desc) {
      ${commonPostQuery}
      'postSlug': slug.current,
    },
  }[0]
`
export const SEARCH_QUERY = groq`
  *[(_type == "post" && !(_id in path("drafts.**")) && (pt::text(content) match $term || excerpt match $term || title match $term || tags[]->title match $term))]
  {
    _id,
    title,
    slug,
    excerpt,
    content,
    tags,
  }
`
