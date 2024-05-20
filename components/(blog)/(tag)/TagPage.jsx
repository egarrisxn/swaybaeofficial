import Link from 'next/link'
import PageName from '@/components/(other)/PageName'
import SearchBar from '@/components/(ui)/SearchBar'
import SocialButtons from '@/components/(ui)/SocialButtons'
import TagPostCard from './TagPostCard'

export default function TagPage({tag}) {
  const {title, posts} = tag

  return (
    <main className='mt-5 flex min-h-dvh w-full flex-col p-0'>
      <label className='sr-only'>Tag Page</label>
      <div className='flex w-full flex-grow flex-col justify-between px-4'>
        <div className='w-full px-4'>
          <header className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0 4xl:max-w-screen-3xl'>
            <Link href='/blog'>
              <PageName>&#8592;Back</PageName>
            </Link>
            <SearchBar placeholder={'Search..'} />
          </header>
          <br />
          <article className='mx-auto mb-4 mt-4 max-w-7xl sm:px-4 lg:mt-12 4xl:max-w-screen-3xl'>
            <h3 className='mb-2 ml-1 text-3xl font-bold'>
              <span className='mr-1 text-xl text-primary'>&#9684;</span>
              {title}
            </h3>
            <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
              {posts.map((post) => (
                <TagPostCard key={post._id} post={post} />
              ))}
            </div>
            <br />
          </article>
        </div>
        <div className='mx-auto mb-4 w-full sm:px-4 4xl:max-w-screen-3xl'>
          <hr className='border-t border-gray-300' />
          <section className='my-6 flex items-center justify-center gap-6 max-[300px]:max-w-60 lg:my-10'>
            <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
              <SocialButtons />
            </div>
          </section>
          <hr className='border-t border-gray-300' />
        </div>
      </div>
    </main>
  )
}

// import Link from 'next/link'
// import PageName from '@/components/(other)/PageName'
// import SearchBar from '@/components/(ui)/SearchBar'
// import SocialButtons from '@/components/(ui)/SocialButtons'
// import TagPostCard from './TagPostCard'

// export default function TagPage({tag}) {
//   const {title, posts} = tag

//   return (
//     <main className='mt-5 min-h-screen w-full p-0'>
//       <label className='sr-only'>Tag Page</label>
//       <div className='w-full px-4'>
//         <header className='mx-auto flex max-w-6xl flex-row items-center justify-between gap-2 pt-4 max-[320px]:flex-col lg:px-4 lg:pt-16 xl:px-0'>
//           <Link href='/blog'>
//             <PageName>&#8592;Back</PageName>
//           </Link>
//           <SearchBar placeholder={'Search..'} />
//         </header>
//         <br />
//         <article className='mx-auto mb-4 mt-4 grid max-w-6xl grid-cols-1 sm:px-4 lg:mt-12'>
//           <h3 className='mb-2 ml-1 text-3xl font-bold'>
//             <span className='mr-1 text-xl text-primary'>&#9684;</span>
//             {title}
//           </h3>
//           <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
//             {posts.map((post) => (
//               <TagPostCard key={post._id} post={post} />
//             ))}
//           </div>
//           <br />
//         </article>
//         <div className='mx-auto mb-4 max-w-6xl sm:px-4'>
//           <hr />
//           <section className='my-6 flex items-center justify-center gap-6 max-[300px]:max-w-60 lg:my-10'>
//             <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
//               <SocialButtons />
//             </div>
//           </section>
//           <hr />
//         </div>
//       </div>
//     </main>
//   )
// }
