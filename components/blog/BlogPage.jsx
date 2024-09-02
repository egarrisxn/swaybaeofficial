import SearchBar from './SearchBar.jsx'
// import {TagFilter} from './TagFilter.jsx'
import {AllPosts} from './AllPosts.jsx'

export default function BlogPage({blog}) {
  return (
    <main className='mt-5 min-h-screen w-full px-2 sm:mt-0 sm:px-4'>
      <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          Blog
        </h1>
        <div className='flex flex-row gap-1'>
          <SearchBar placeholder={'Search..'} />
          {/* <TagFilter tags={blog} /> */}
        </div>
      </header>
      <br />
      {/* ----------Blog List---------- */}
      <section className='mx-auto my-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
        <AllPosts posts={blog} />
      </section>
    </main>
  )
}
