import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '@/utils/sanity/client'

export default function TagSlugCard({post}) {
  const {coverImage, title, tags, excerpt} = post

  return (
    <>
      <div className='grid grid-cols-1 gap-2 rounded-lg border-2 bg-w2b p-4 shadow-soft sm:shadow-hard md:p-8 lg:grid-cols-6 lg:p-2 2xl:gap-6'>
        <div className='hidden drop-shadow-md lg:col-start-1 lg:col-end-3 lg:grid lg:p-4'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <Image
              className='rounded border-2 bg-light object-cover object-center p-2 shadow-md'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt || 'Post Image'}
              width={600}
              height={200}
            />
          </Link>
        </div>
        <div className='lg:col-start-3 lg:col-end-6 lg:grid'>
          <div className='flex flex-col gap-2 p-1 lg:gap-4 lg:px-0 lg:py-4 xl:gap-6 2xl:gap-12'>
            <div className='flex flex-row lg:hidden'>
              <p className='prose prose-sm line-clamp-1 flex w-fit rounded-md bg-neutral px-2 tracking-tight text-light drop-shadow-md lg:prose-base dark:prose-invert lg:hidden'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <Link href={`/blog/post/${post.postSlug}`}>
              <h3 className='prose prose-lg line-clamp-1 font-bold lg:prose-2xl dark:prose-invert hover:underline lg:line-clamp-2 2xl:text-4xl'>
                {title}
              </h3>
            </Link>
            <p className='prose prose-base line-clamp-2 text-gray-fade lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert lg:line-clamp-3'>
              {excerpt}
            </p>
          </div>
        </div>
        <div className='lg:col-span-1 lg:col-end-7 lg:grid'>
          <div className='flex flex-col lg:mt-2 lg:justify-between lg:p-4'>
            <div className='hidden justify-end lg:flex lg:flex-row'>
              <p className='prose prose-sm line-clamp-1 flex w-fit rounded-md bg-gray-tint px-2 tracking-tight text-light drop-shadow-md lg:prose-base 2xl:prose-xl dark:prose-invert'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className='flex justify-end'>
              <Link href={`/blog/post/${post.postSlug}`}>
                <h5 className='mt-4 font-bold text-primary 2xl:text-xl'>Read Post&#8594;</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
