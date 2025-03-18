import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, projectId, dataset } from "./api";

export const client = createClient({
  apiVersion,
  projectId,
  dataset,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// import {createClient} from 'next-sanity'
// import {apiVersion, projectId, dataset, revalidateSecret, studioUrl} from './api'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   apiVersion: apiVersion || '',
//   projectId: projectId || '',
//   dataset: dataset || '',
//   useCdn: revalidateSecret ? false : true,
//   perspective: 'published',
//   stega: {
//     studioUrl: studioUrl || 'https://swaybae.sanity.studio/',
//     logger: console,
//     filter: (props) => {
//       if (props.sourcePath.at(-1) === 'title') {
//         return true
//       }
//       return props.filterDefault(props)
//     },
//   },
// })

// const imageBuilder = imageUrlBuilder(client)
// export function urlFor(source) {
//   return imageBuilder.image(source)
// }
