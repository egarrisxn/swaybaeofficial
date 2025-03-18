import { client } from "./client";

export default async function sitemapData() {
  try {
    const postQuery = `*[_type == "post"]{ "slug": slug.current, _updatedAt }`;
    const tagQuery = `*[_type == "tag"]{ "slug": slug.current, _updatedAt }`;

    const [posts, tags] = await Promise.all([client.fetch(postQuery), client.fetch(tagQuery)]);

    return { posts, tags };
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return { posts: [], tags: [] };
  }
}
