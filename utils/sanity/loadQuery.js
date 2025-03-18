import "server-only";
import * as queryStore from "@sanity/react-loader";
import { client } from "./client";
import { token } from "./token";
import { POST_QUERY, POSTS_QUERY, TAG_QUERY, TAGS_QUERY } from "./queries";

const serverClient = client.withConfig({
  token,
});

// Sets the server client for the query store, ensuring all data fetching in production happens on the server, not the client.
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;

export const loadQuery = async (query, params = {}, options = {}) => {
  // Don't cache by default
  let revalidate = 0;
  // If `next.tags` is set and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }

  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
  });
};

// Loaders used in multiple places
export async function loadBlog() {
  return loadQuery(POSTS_QUERY, TAGS_QUERY, {}, { next: { tags: ["post", "tag"] } });
}

export async function loadPost(slug) {
  return loadQuery(POST_QUERY, { slug }, { next: { tags: [`post:${slug}`] } });
}

export async function loadTag(slug) {
  return loadQuery(TAG_QUERY, { slug }, { next: { tags: [`tag:${slug}`] } });
}

// import 'server-only'
// import * as queryStore from '@sanity/react-loader'
// import {draftMode} from 'next/headers'
// import {client} from './client'
// import {token} from './token'
// import {POST_QUERY, POSTS_QUERY, TAG_QUERY, TAGS_QUERY} from './queries'

// const serverClient = client.withConfig({
//   token,
//   // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
//   stega: process.env.VERCEL_ENV === 'preview',
// })

// // Sets the server client for the query store, doing it here ensures that all data fetching in production happens on the server and not on the client. Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with live draft content using `postMessage`.
// queryStore.setServerClient(serverClient)

// const usingCdn = serverClient.config().useCdn
// // Automatically handle draft mode
// export const loadQuery = (query, params = {}, options = {}) => {
//   const {perspective = draftMode().isEnabled ? 'previewDrafts' : 'published'} = options
//   // Don't cache by default
//   let revalidate = 0
//   // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
//   if (!usingCdn && Array.isArray(options.next?.tags)) {
//     revalidate = false
//   } else if (usingCdn) {
//     revalidate = 60
//   }
//   return queryStore.loadQuery(query, params, {
//     ...options,
//     next: {
//       revalidate,
//       ...(options.next || {}),
//     },
//     perspective,
//     // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
//     stega: draftMode().isEnabled,
//   })
// }

// // Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
// export function loadBlog() {
//   return loadQuery(POSTS_QUERY, TAGS_QUERY, {}, {next: {tags: ['post', 'tag']}})
// }
// export function loadPost(slug) {
//   return loadQuery(POST_QUERY, {slug}, {next: {tags: [`post:${slug}`]}})
// }
// export function loadTag(slug) {
//   return loadQuery(TAG_QUERY, {slug}, {next: {tags: [`tag:${slug}`]}})
// }
