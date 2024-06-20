import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/utils/sanity/client.js'

export default function TagSlugCard({ post }) {
  const { coverImage, title, tags, excerpt } = post

  return (
    <section>
      <div className='grid grid-cols-1 gap-2 rounded-md border-2 p-4 shadow-md md:p-8 lg:grid-cols-3 lg:gap-6 lg:p-2'>
        <figure className='hidden drop-shadow-md lg:block lg:p-4'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border bg-white object-cover object-center p-2 shadow-md'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt || 'Post Image'}
              width={600}
              height={200}
            />
          </Link>
        </figure>
        <div className='flex flex-col gap-4 lg:mt-2 lg:p-4'>
          <p className='prose prose-sm line-clamp-1 w-fit rounded-sm bg-slate-700 px-2 tracking-tight text-white drop-shadow-md lg:prose-base dark:prose-invert'>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <Link href={`/blog/post/${post.postSlug}`}>
            <h3 className='prose prose-lg prose-slate line-clamp-1 font-bold lg:prose-2xl dark:prose-invert hover:underline lg:line-clamp-2'>
              {title}
            </h3>
          </Link>
        </div>
        <div className='flex flex-col justify-normal lg:mt-2 lg:justify-between lg:p-4'>
          <h4 className='prose prose-base prose-slate line-clamp-2 text-gray-500 lg:prose-lg dark:prose-invert lg:line-clamp-3'>
            {excerpt}
          </h4>
          <div className='flex justify-end'>
            <Link href={`/blog/post/${post.postSlug}`}>
              <h5 className='mt-4 font-bold text-primary'>Read Post&#8594;</h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}