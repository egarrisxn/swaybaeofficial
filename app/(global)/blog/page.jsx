import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import BlogPage from '@/components/(blog)/BlogPage'
import {loadBlog} from '@/sanity/lib/loadQuery'
const BlogPagePreview = dynamic(() => import('@/components/(blog)/BlogPage-Preview'))

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

// import {POSTS_QUERY, TAGS_QUERY} from '@/sanity/lib/queries'
// import BlogPage from '@/components/(blog)/BlogPage'
// import {sanityFetch} from '@/sanity/lib/fetch'

// export default async function BlogHomePage() {
//   const blog = await sanityFetch({
//     query: POSTS_QUERY,
//     query: TAGS_QUERY,
//   })
//   if (!blog) {
//     return notFound()
//   }
//   return <BlogPage blog={blog} />
// }

// import {draftMode} from 'next/headers'
// import {loadQuery} from '@/sanity/lib/store'
// import {POSTS_QUERY, TAGS_QUERY} from '@/sanity/lib/queries'
// import BlogPage from '@/components/(blog)/BlogPage'
// import BlogPagePreview from '@/components/(blog)/BlogPage-Preview'

// export default async function BlogHomePage() {
//   const initial = await loadQuery(
//     POSTS_QUERY,
//     TAGS_QUERY,
//     {},
//     {
//       perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
//     },
//   )

//   return draftMode().isEnabled ? (
//     <BlogPagePreview initial={initial} />
//   ) : (
//     <BlogPage blog={initial.data} />
//   )
// }
