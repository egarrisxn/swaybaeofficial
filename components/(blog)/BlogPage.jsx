import Header from '../Header'
import {AllPosts} from '../xx/AllPosts'

export default function BlogPage({blog}) {
  return (
    <>
      <Header id='blog' showSearch={true} showLink={false}>
        Blog
      </Header>
      {/* ----------List of Posts---------- */}
      <div className='mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10 3xl:px-16 4xl:max-w-screen-3xl'>
        <AllPosts posts={blog} />
      </div>
    </>
  )
}
