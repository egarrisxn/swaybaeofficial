import AllPosts from './AllPosts'
import AllTags from './AllTags'
import TagFilter from './TagFilter'
import PageName from '../(other)/PageName'
import SearchBar from '../(ui)/SearchBar'
import SocialButtons from '../(ui)/SocialButtons'

export default function BlogPage({blog}) {
  return (
    <main className='mt-5 min-h-dvh w-full p-0'>
      <label className='sr-only'>Blog</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
          <PageName>Blog</PageName>
          <div className='flex flex-row gap-1'>
            <SearchBar placeholder={'Search..'} />
            <TagFilter tags={blog} />
          </div>
        </header>
        <br />
        <article className='mx-auto mb-4 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
          <AllPosts posts={blog} />
          <br />
        </article>
        <div className='mx-auto mb-4 sm:px-4 4xl:max-w-screen-3xl'>
          <hr />
          <section className='my-6 flex items-center justify-center gap-6 max-[300px]:max-w-60 lg:my-10'>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              <SocialButtons />
            </div>
          </section>
          <hr />
        </div>
      </div>
    </main>
  )
}
