import Link from 'next/link'
import SearchBar from './SearchBar.jsx'
import TagSlugCard from './TagSlugCard.jsx'

export default function TagPage({tag}) {
  if (!tag) return null

  const {title, posts} = tag

  return (
    <main className='mt-5 min-h-screen w-full px-4 sm:mt-0'>
      <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[360px]:flex-col max-[360px]:justify-center lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
        <Link href='/blog'>
          <h1
            className='cursor-pointer bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent sm:ml-2 3xl:ml-3 3xl:mt-6 3xl:text-3xl'
            aria-label='Back to Blog'
          >
            &#8592; Back
          </h1>
        </Link>
        <SearchBar placeholder='Search..' />
      </header>
      <br />
      <section className='mx-auto mb-4 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
        <h3 className='mb-2 ml-1 text-2xl font-bold sm:text-3xl'>
          <span className='mr-1 text-xl text-primary'>&#9684;</span>
          {title}
        </h3>
        <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
          {posts.map((post) => (
            <TagSlugCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
