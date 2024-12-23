import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './tag-badge'
import DateBadge from './date-badge'
import {urlFor} from '@/utils/sanity/client'

export default function LatestCard({post}) {
  const {coverImage, title, excerpt, tags, publishedAt} = post

  return (
    <div className='grid grid-cols-1 gap-2 md:gap-3'>
      <section className='mb-1 md:mb-0'>
        <DateBadge publishedAt={publishedAt} />
      </section>
      <div className='rounded shadow-soft transition-all duration-300 ease-in-out hover:shadow-hard'>
        <Link href={`/blog/post/${post.postSlug}`}>
          <Image
            className='rounded border-2 bg-light object-cover object-center p-1 shadow-md'
            src={urlFor(coverImage.image).fit('max').auto('format').url()}
            alt={coverImage.alt}
            width={800}
            height={450}
          />
        </Link>
      </div>
      <section className='hidden md:block'>
        <div className='flex justify-end gap-1'>
          {tags.map((tag) => (
            <div key={tag._id}>
              <TagBadge tag={tag} />
            </div>
          ))}
        </div>
      </section>
      <section className='mt-2 space-y-2 md:ml-1'>
        <Link href={`/blog/post/${post.postSlug}`}>
          <h3 className='line-clamp-1 scroll-m-20 text-xl font-bold leading-tight tracking-tighter hover:underline 3xl:text-2xl'>
            {title}
          </h3>
        </Link>
        <p className='line-clamp-3 scroll-m-20 text-lg tracking-tight text-gray-fade 3xl:text-xl'>
          {excerpt}
        </p>
        <Link
          href={`/blog/post/${post.postSlug}`}
          className='font-bold text-primary hover:font-extrabold'
        >
          <p className='pt-2'>Read Post&#8594;</p>
        </Link>
      </section>
    </div>
  )
}
