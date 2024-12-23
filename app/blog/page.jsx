import {notFound} from 'next/navigation'
import {loadBlog} from '@/utils/sanity/loadQuery'
import PageHeader from '@/components/page-header'
import {AllPosts} from '@/components/all-posts'

export default async function BlogPage(props) {
  const params = await props.params
  const initial = await loadBlog(params)

  if (!initial.data) {
    notFound()
  }

  return (
    <>
      <PageHeader id='blog' showSearch={true} showLink={false}>
        Blog
      </PageHeader>
      {/* ----------List of Posts---------- */}
      <div className='mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10 3xl:px-16 4xl:max-w-screen-3xl'>
        <AllPosts posts={initial.data} />
      </div>
    </>
  )
}

// import {notFound} from 'next/navigation'
// import {loadBlog} from '@/utils/sanity/loadQuery'
// import BlogPage from '@/containers/blog-page/BlogPage'

// export default async function BlogHomePage({params}) {
//   const initial = await loadBlog(params)

//   if (!initial.data) {
//     notFound()
//   }

//   return <BlogPage blog={initial.data} />
// }
