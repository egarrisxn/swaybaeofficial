import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import TagPage from '@/components/(blog)/(tag)/TagPage'
import {generateStaticSlugs} from '@/sanity/lib/generateStaticSlugs'
import {loadTag} from '@/sanity/lib/loadQuery'
const TagPagePreview = dynamic(() => import('@/components/(blog)/(tag)/TagPage-Preview'))

export function generateStaticParams() {
  return generateStaticSlugs('tag')
}

export default async function TagSlugPage({params}) {
  const initial = await loadTag(params.slug)

  if (draftMode().isEnabled) {
    return <TagPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <TagPage tag={initial.data} />
}

// import {TAGS_QUERY, TAG_QUERY} from '@/sanity/lib/queries'
// import TagPage from '@/components/(blog)/(tag)/TagPage'

// export async function generateStaticParams() {
//   const tags = await sanityFetch({
//     query: TAGS_QUERY,
//     perspective: 'published',
//     stega: false,
//   })

//   return tags.map((tag) => ({
//     slug: tag.tagSlug,
//   }))
// }

// export default async function TagSlugPage({params}) {
//   const tag = await sanityFetch({query: TAG_QUERY, params})
//   if (!tag) {
//     return notFound()
//   }
//   return <TagPage tag={tag} />
// }

// import {draftMode} from 'next/headers'
// import {loadQuery} from '@/sanity/lib/store'
// import {TAGS_QUERY, TAG_QUERY} from '@/sanity/lib/queries'
// import TagPage from '@/components/(blog)/(tag)/TagPage'
// import TagPagePreview from '@/components/(blog)/(tag)/TagPage-Preview'
// import {client} from '@/sanity/lib/client'

// export async function generateStaticParams() {
//   const tags = await client.fetch(TAGS_QUERY)

//   return tags.map((tag) => ({
//     slug: tag.tagSlug,
//   }))
// }

// export default async function TagSlugPage({params}) {
//   const initial = await loadQuery(TAG_QUERY, params, {
//     // Because of Next.js, RSC and Dynamic Routes this currently
//     // cannot be set on the loadQuery function at the "top level"
//     perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
//   })

//   return draftMode().isEnabled ? (
//     <TagPagePreview initial={initial} params={params} />
//   ) : (
//     <TagPage tag={initial.data} />
//   )
// }
