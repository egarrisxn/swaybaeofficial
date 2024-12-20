export function resolveHref(docType, slug) {
  switch (docType) {
    case 'blog':
      return '/blog'
    case 'post':
      return slug ? `/blog/post/${slug}` : undefined
    case 'tag':
      return slug ? `/blog/tag/${slug}` : undefined
    default:
      console.warn('Invalid document type:', docType)
      return undefined
  }
}
