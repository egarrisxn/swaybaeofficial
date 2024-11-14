import {client} from './client'

export default async function sitemapData() {
  try {
    const postQuery = `*[_type == "post"]{ "slug": slug.current, _updatedAt }`
    const posts = await client.fetch(postQuery)
    return posts
  } catch (error) {
    console.error('Error fetching sitemap data:', error)
    return []
  }
}
