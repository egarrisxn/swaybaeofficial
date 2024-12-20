import 'server-only'
import {groq} from 'next-sanity'
import {client} from './client'
import {token} from './token'

// Used in `generateStaticParams`
export function generateStaticSlugs(type) {
  // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
  return client
    .withConfig({
      token,
      perspective: 'published',
      useCdn: false,
      stega: false,
    })
    .fetch(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      {type},
      {
        next: {
          tags: [type],
        },
      },
    )
}
