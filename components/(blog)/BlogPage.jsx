import {AllPosts} from './AllPosts'
import {TagFilter} from './TagFilter'
import {PageName} from '../(other)/PageName'
import SearchBar from '../(ui)/SearchBar'

export default function BlogPage({blog}) {
  return (
    <main className='mt-5 min-h-screen w-full p-0'>
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
        <section className='mx-auto mb-4 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
          <AllPosts posts={blog} />
        </section>
      </div>
    </main>
  )
}
