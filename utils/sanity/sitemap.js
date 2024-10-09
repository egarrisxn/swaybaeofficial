import {client} from './client'

export default async function sitemapData() {
  const postQuery = `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
  const posts = await client.fetch(postQuery)
  return posts
}
