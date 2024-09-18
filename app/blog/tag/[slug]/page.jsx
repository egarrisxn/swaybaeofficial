// import dynamic from 'next/dynamic'
// import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/utils/sanity/generateStaticSlugs'
import {loadTag} from '@/utils/sanity/loadQuery'
import TagPage from '@/containers/tag-page/TagPage'

// const TagPagePreview = dynamic(() => import('@/containers/tag-page/TagPage-Preview.jsx'))

function loadingPage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Loading...')
    }, 1000)
  })
}

export function generateStaticParams() {
  return generateStaticSlugs('tag')
}

export default async function TagSlugPage({params}) {
  const load = await loadingPage()
  console.log({load})

  const initial = await loadTag(params.slug)

  // if (draftMode().isEnabled) {
  //   return <TagPagePreview params={params} initial={initial} />
  // }

  if (!initial.data) {
    notFound()
  }

  return <TagPage tag={initial.data} />
}
