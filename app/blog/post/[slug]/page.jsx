import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { generateStaticSlugs } from '@/utils/sanity/generateStaticSlugs.js'
import { loadPost } from '@/utils/sanity/loadQuery.js'
import PostPage from '@/components/blog/PostPage.jsx'

const PostPagePreview = dynamic(() => import('@/components/blog/PostPage-Preview.jsx'))

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugPage({ params }) {
  const initial = await loadPost(params.slug)

  if (draftMode().isEnabled) {
    return <PostPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <PostPage post={initial.data} />
}
