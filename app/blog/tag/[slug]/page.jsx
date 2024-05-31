import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/utils/sanity/generateStaticSlugs.js'
import {loadTag} from '@/utils/sanity/loadQuery.js'
import TagPage from '@/components/blog/TagPage.jsx'
const TagPagePreview = dynamic(() => import('@/components/blog/TagPage-Preview.jsx/'))

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
