import Link from 'next/link'
import Image from 'next/image'
import PortableTextComponents from './PortableTextComponents'
import TableOfContent from './TableOfContent'
import TagBadge from '../(tag)/TagBadge'
import PageName from '@/components/(other)/PageName'
import SearchBar from '@/components/(ui)/SearchBar'
import SocialButtons from '@/components/(ui)/SocialButtons'
import {urlFor} from '@/sanity/lib/image'

export default function PostPage({post}) {
  const {title, coverImage, tags, content, headings, meta} = post

  return (
    <main className='mt-5 min-h-screen w-full p-0'>
      <label className='sr-only'>Post</label>
      <div className='w-full px-4'>
        <header className='mx-auto flex max-w-6xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0'>
          <Link href='/blog'>
            <PageName>&#8592;Back</PageName>
          </Link>
          <SearchBar placeholder={'Search..'} />
        </header>
        <br />
        <article className='container mx-auto mb-4 mt-4 grid max-w-7xl grid-cols-1 sm:px-4 lg:mt-12 lg:grid-cols-12'>
          <aside className='sticky top-[2rem] col-start-1 col-end-2 hidden h-screen pt-12 lg:block'>
            <TableOfContent headings={headings} />
          </aside>
          <div className='col-start-2 col-end-13 mx-auto grid sm:gap-2'>
            <p className='prose-md prose line-clamp-1 w-fit rounded-md bg-slate-700 px-2 tracking-tight text-white drop-shadow-md dark:prose-invert'>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <section className='mb-2 mt-8 flex items-center justify-between text-center'>
              <h3 className='prose prose-2xl prose-slate line-clamp-2 font-bold max-[300px]:prose-sm dark:prose-invert sm:text-4xl md:text-5xl xl:text-6xl'>
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
                className='rounded border bg-white object-cover object-center p-2 shadow-md'
                src={urlFor(coverImage.image).fit('max').auto('format').url()}
                alt={coverImage.alt}
                width={1000}
                height={300}
                priority
              />
            </section>
            <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
              <div className='myProse mx-auto xl:prose-2xl'>
                <PortableTextComponents content={content} />
              </div>
            </section>
            <br />
          </div>
        </article>
        <div className='mx-auto mb-4 max-w-6xl sm:px-4'>
          <hr />
          <section className='my-6 flex flex-col items-center justify-center gap-6 max-[300px]:max-w-60 lg:my-10 lg:flex-row-reverse lg:justify-between '>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              {tags.map((tag) => (
                <div key={tag._id}>
                  <TagBadge tag={tag} />
                </div>
              ))}
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              <SocialButtons />
            </div>
          </section>
          <hr />
        </div>
      </div>
    </main>
  )
}
