import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {loadBlog} from '@/utils/sanity/loadQuery'
import BlogPage from '@/containers/blog-page/BlogPage'

const BlogPagePreview = dynamic(() => import('@/containers/blog-page/BlogPage-Preview.jsx'))

export default async function BlogHomePage({params}) {
  const initial = await loadBlog(params)

  if (draftMode().isEnabled) {
    return <BlogPagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogPage blog={initial.data} />
}
