import Link from 'next/link'
import Image from 'next/image'
import TagBadge from '../xx/TagBadge'
import DateBadge from '../xx/DateBadge'
import {urlFor} from '@/utils/sanity/client'

export default function LatestCard({post}) {
  const {coverImage, title, excerpt, tags, publishedAt} = post
  return (
    <>
      <div className='grid grid-cols-1 gap-2 md:gap-3'>
        <section className='mb-1 md:mb-0'>
          <DateBadge publishedAt={publishedAt} />
        </section>
        <figure className='rounded shadow-soft transition-all duration-300 ease-in-out hover:shadow-hard'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border-2 bg-light object-cover object-center p-1 shadow-md'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={800}
              height={450}
            />
          </Link>
        </figure>
        <section className='hidden md:block'>
          <div className='flex justify-end gap-1'>
            {tags.map((tag) => (
              <div key={tag._id}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
        </section>
        <section className='mt-2 md:ml-1'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <h2 className='line-clamp-1 scroll-m-20 text-lg font-bold tracking-tight hover:underline 3xl:text-xl'>
              {title}
            </h2>
          </Link>
          <h3 className='line-clamp-3 scroll-m-20 text-lg leading-tight tracking-tight text-gray-fade 3xl:text-xl'>
            {excerpt}
          </h3>
          <Link href={`/blog/post/${post.postSlug}`}>
            <p className='mt-4 font-bold text-primary hover:font-extrabold'>Read Post&#8594;</p>
          </Link>
        </section>
      </div>
    </>
  )
}
