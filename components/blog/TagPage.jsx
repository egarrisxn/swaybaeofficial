import Link from 'next/link'
import SearchBar from './SearchBar.jsx'
import TagSlugCard from './TagSlugCard.jsx'

export default function TagPage({tag}) {
  const {title, posts} = tag

  return (
    <main className='mt-5 min-h-screen w-full p-0'>
      <label className='sr-only' aria-label='Tag'>
        Tag
      </label>
      <br className='hidden md:block' />
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
          <Link href='/blog'>
            <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
              &#8592;Back
            </h1>
          </Link>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <section className='mx-auto mb-4 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
          <h3 className='mb-2 ml-1 text-3xl font-bold'>
            <span className='mr-1 text-xl text-primary'>&#9684;</span>
            {title}
          </h3>
          <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
            {posts.map((post) => (
              <TagSlugCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
