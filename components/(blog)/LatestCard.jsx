import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './(tag)/TagBadge'
import {urlFor} from '@/sanity/lib/image'

export default function LatestCard({post}) {
  const {coverImage, title, tags, excerpt} = post
  return (
    <article>
      <label className='sr-only'>Latest Card</label>
      <div className='grid grid-cols-1 gap-2 md:gap-3'>
        <section className='mb-1 md:mb-0'>
          <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-slate-800 px-2 tracking-tight text-white drop-shadow-md dark:prose-invert'>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </section>
        <section className='drop-shadow-md transition-all ease-in-out hover:scale-105'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border bg-light object-cover object-center p-2 shadow-md'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={800}
              height={450}
            />
          </Link>
        </section>
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
            <h3 className='prose prose-base prose-slate line-clamp-1 font-bold md:prose-lg dark:prose-invert hover:underline'>
              {title}
            </h3>
          </Link>
          <h4 className='prose prose-sm prose-slate line-clamp-2 text-gray-500 md:prose-base dark:prose-invert'>
            {excerpt}
          </h4>
          <Link href={`/blog/post/${post.postSlug}`}>
            <p className='mt-4 font-bold text-primary hover:font-extrabold'>Read Post&#8594;</p>
          </Link>
        </section>
      </div>
    </article>
  )
}
