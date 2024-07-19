import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { loadBlog } from '@/utils/sanity/loadQuery.js'
import BlogPage from '@/components/blog/BlogPage.jsx'

const BlogPagePreview = dynamic(() => import('@/components/blog/BlogPage-Preview.jsx'))

export default async function BlogHomePage({ params }) {
  const initial = await loadBlog(params)

  if (draftMode().isEnabled) {
    return <BlogPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogPage blog={initial.data} />
}