'use client'
import {useState} from 'react'
import FeaturedCard from './FeaturedCard'
import LatestCard from './LatestCard'
import LoadButton from '../(ui)/LoadButton'

export function AllPosts({posts}) {
  const featuredPosts = posts.filter((post) => post.featured)
  const remainingPosts = posts.filter((post) => !post.featured)

  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)

  const showMoreArticles = () => {
    setLoadMore(loadMore + 3)
  }

  return (
    <main>
      <h3 className='mb-2 ml-1 text-xl font-bold'>Featured Posts</h3>
      {featuredPosts.length > 0 && (
        <section className='mt-8 grid grid-cols-1 gap-16 pb-16'>
          {featuredPosts.map((post) => (
            <div key={post._id}>
              <FeaturedCard post={post} />
            </div>
          ))}
        </section>
      )}
      <hr className='mb-8 mt-4 w-full border' />
      <h4 className='mb-4 ml-1 text-xl font-bold'>Latest Posts</h4>
      <section className='mt-8 grid grid-cols-1 gap-16 pb-12 md:grid-cols-2 xl:grid-cols-3'>
        {[...featuredPosts, ...remainingPosts].slice(0, loadMore).map((post) => (
          <div key={post._id} className='x'>
            <LatestCard post={post} />
          </div>
        ))}
      </section>
      {posts.length > loadMore && <LoadButton onClick={showMoreArticles} />}
    </main>
  )
}
