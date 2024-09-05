import Image from 'next/image'
import {Header} from '../Header'
import TableOfContent from './TableOfContent'
import TagBadge from './TagBadge'
import PortableTextComponents from './PortableTextComponents'
import {urlFor} from '@/utils/sanity/client'

export default function PostPage({post}) {
  if (!post) return null

  const {title, coverImage, tags, content, headings, publishedAt} = post

  return (
    <>
      <Header id='post' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
      {/* ----------Post Body---------- */}
      <article className='mx-auto mb-4 mt-12 grid max-w-7xl grid-cols-1 sm:px-4 lg:mt-20 lg:grid-cols-12 lg:pr-6 xl:pr-10 3xl:pr-16 4xl:max-w-screen-3xl'>
        <aside className='col-start-1 col-end-2 hidden lg:sticky lg:top-[2rem] lg:block lg:h-screen lg:pt-12'>
          <TableOfContent headings={headings} />
        </aside>
        <div className='col-start-2 col-end-13 mx-auto grid sm:gap-2'>
          <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-gray-tint px-2 tracking-tight text-light drop-shadow-md dark:prose-invert'>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <section className='mb-2 mt-8 flex items-center justify-between text-center 4xl:mb-4'>
            <h3 className='prose prose-2xl prose-slate line-clamp-3 font-bold max-[300px]:prose-sm dark:prose-invert sm:text-3xl md:text-4xl lg:text-5xl 4xl:pl-20 4xl:pr-12'>
              {title}
            </h3>
            <div className='hidden gap-1 lg:flex lg:justify-end'>
              {tags.map((tag) => (
                <div key={tag._id}>
                  <TagBadge tag={tag} />
                </div>
              ))}
            </div>
          </section>
          <section className='mt-1 flex max-[300px]:max-w-60 min-[300px]:mx-auto'>
            <Image
              className='w-full rounded border-2 bg-light object-cover object-center p-2 shadow-md'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt || 'Cover Image'}
              width={1000}
              height={300}
            />
          </section>
          <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
            <div className='prose prose-slate mx-auto transition-all duration-200 ease-in md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert prose-h1:font-bold prose-h1:text-primary prose-h2:font-semibold prose-h2:text-primary prose-h3:font-medium prose-h3:text-secondary prose-h4:font-normal prose-h4:text-secondary prose-a:text-blue hover:prose-a:text-blue-tint prose-blockquote:border-primary prose-blockquote:text-secondary prose-code:text-pink prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary prose-th:bg-blue-tint prose-th:text-xl prose-img:w-full prose-img:rounded prose-img:border-2 prose-img:bg-light prose-img:p-2 prose-img:shadow-md'>
              <PortableTextComponents content={content} />
            </div>
          </section>
        </div>
      </article>
      <div className='mb-16 flex max-w-5xl flex-col items-center justify-center max-[300px]:max-w-60 min-[300px]:mx-auto md:flex-row lg:mb-20 3xl:mb-24 4xl:mb-10 4xl:max-w-6xl 4xl:pr-0'>
        <hr className='mb-4 w-full rounded-lg border border-gray-fade md:mb-0' />
        <p className='pb-2 font-thin md:pb-0 md:pr-2'>Tags:</p>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
          {tags.map((tag) => (
            <div key={tag._id}>
              <TagBadge tag={tag} />
            </div>
          ))}
        </div>
        <hr className='mt-4 w-full rounded-lg border border-gray-fade md:mt-0' />
      </div>
    </>
  )
}
