// import Image from 'next/image'
// import PageHeader from '@/components/PageHeader'
// import TableOfContent from '@/components/TableOfContent'
// import TagBadge from '@/components/TagBadge'
// import DateBadge from '@/components/DateBadge'
// import PortableTextComponents from '@/components/PortableTextComponents'
// import {urlFor} from '@/utils/sanity/client'

// export default function PostPage({post}) {
//   if (!post) return null

//   const {title, coverImage, content, headings, tags, publishedAt} = post

//   return (
//     <>
//       <PageHeader id='post' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
//       {/* ----------Post Body---------- */}
//       <article className='mx-auto mb-4 mt-12 grid max-w-7xl grid-cols-1 sm:px-4 lg:mt-20 lg:grid-cols-12 lg:pr-6 xl:pr-10 3xl:pr-16 4xl:max-w-screen-3xl'>
//         <aside className='col-start-1 col-end-2 hidden lg:sticky lg:top-[2rem] lg:block lg:h-screen lg:pt-12'>
//           <TableOfContent headings={headings} />
//         </aside>
//         <div className='col-start-2 col-end-13 mx-auto grid sm:gap-2'>
//           <DateBadge publishedAt={publishedAt} />
//           <section className='mb-2 mt-8 flex items-center justify-between text-center 3xl:flex-col'>
//             <h1 className='scroll-m-20 pb-2 text-xl font-extrabold leading-tight tracking-tight first:mt-0 sm:text-3xl md:text-4xl lg:text-5xl 3xl:px-4 3xl:text-6xl'>
//               {title}
//             </h1>
//             <div className='hidden gap-1 lg:flex lg:justify-end 3xl:py-2'>
//               {tags.map((tag) => (
//                 <div key={tag._id}>
//                   <TagBadge tag={tag} />
//                 </div>
//               ))}
//             </div>
//           </section>
//           <section className='mt-1 flex max-[300px]:max-w-60 min-[300px]:mx-auto'>
//             <Image
//               className='w-full rounded border-2 bg-white object-cover object-center p-2 shadow-soft hover:shadow-hard'
//               src={urlFor(coverImage.image).fit('max').auto('format').url()}
//               alt={coverImage.alt || 'Cover Image'}
//               width={1000}
//               height={300}
//             />
//           </section>
//           <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
//             <div className='prose prose-slate mx-auto transition-all ease-in-out md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert prose-h1:text-primary prose-h2:text-secondary prose-h3:text-primary prose-h4:text-secondary prose-a:text-blue hover:prose-a:text-blue-tint prose-blockquote:border-primary prose-blockquote:text-secondary prose-code:text-pink prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary prose-th:bg-blue-tint prose-th:text-xl prose-img:w-full prose-img:shadow-soft hover:prose-img:shadow-hard'>
//               <PortableTextComponents content={content} />
//             </div>
//           </section>
//         </div>
//       </article>
//       <div className='mb-16 flex max-w-5xl flex-col items-center justify-center max-[300px]:max-w-60 min-[300px]:mx-auto md:flex-row lg:mb-20 3xl:mb-24 4xl:mb-10 4xl:max-w-6xl 4xl:pr-0'>
//         <hr className='mb-4 w-full rounded-lg border border-gray-fade md:mb-0' />
//         <p className='pb-2 font-semibold md:pb-0 md:pr-2'>Tags:</p>
//         <div className='flex items-center justify-center gap-2'>
//           {tags.map((tag) => (
//             <div key={tag._id}>
//               <TagBadge tag={tag} />
//             </div>
//           ))}
//         </div>
//         <hr className='mt-4 w-full rounded-lg border border-gray-fade md:mt-0' />
//       </div>
//     </>
//   )
// }
