import Link from 'next/link'
import Image from 'next/image'
import PortableTextComponents from '../PortableTextComponents'
import TableOfContent from './TableOfContent'
import TagBadge from '../(tag)/TagBadge'
import {PageName} from '../../(other)/PageName'
import SearchBar from '../../(ui)/SearchBar'
import {urlFor} from '@/sanity/lib/image'

export default function PostPage({post}) {
  const {title, coverImage, tags, content, headings} = post

  return (
    <main className='mt-5 min-h-screen w-full p-0'>
      <label className='sr-only'>Post</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
          <Link href='/blog'>
            <PageName>&#8592;Back</PageName>
          </Link>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <article className='mx-auto my-4 grid max-w-7xl grid-cols-1 sm:px-4 lg:mt-12 lg:grid-cols-12 4xl:max-w-screen-3xl'>
          <aside className='sticky top-[2rem] col-start-1 col-end-2 hidden h-screen pt-12 lg:block'>
            <TableOfContent headings={headings} />
          </aside>
          <div className='col-start-2 col-end-13 mx-auto grid sm:gap-2'>
            <p className='prose prose-sm line-clamp-1 w-fit rounded-md bg-slate-700 px-2 tracking-tight text-light drop-shadow-md dark:prose-invert'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
                className='w-full rounded border bg-light object-cover object-center p-2 shadow-md'
                src={urlFor(coverImage.image).fit('max').auto('format').url()}
                alt={coverImage.alt}
                width={1000}
                height={300}
                priority
              />
            </section>
            <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
              <div className='prose prose-slate mx-auto transition-all duration-200 ease-in md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert prose-h1:font-bold prose-h1:text-primary prose-h2:font-semibold prose-h2:text-primary/90 prose-h3:font-medium  prose-h3:text-secondary prose-h4:font-normal prose-h4:text-secondary/90 prose-a:text-sky-500  hover:prose-a:text-sky-700 prose-blockquote:border-primary prose-blockquote:text-secondary prose-code:text-pink prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight  prose-li:marker:text-primary prose-th:bg-cyan prose-th:text-xl prose-img:w-full prose-img:rounded prose-img:border prose-img:bg-light prose-img:p-2 prose-img:shadow-md'>
                <PortableTextComponents content={content} />
              </div>
            </section>
          </div>
        </article>
        <section className='my-6 flex max-w-5xl flex-col items-center justify-center max-[300px]:max-w-60 min-[300px]:mx-auto md:flex-row md:justify-end md:pr-4 4xl:mb-10 4xl:max-w-6xl 4xl:pr-0'>
          <p className='pb-2 font-semibold md:pb-0 md:pr-2'>Tags:</p>
          <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
            {tags.map((tag) => (
              <div key={tag._id}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
