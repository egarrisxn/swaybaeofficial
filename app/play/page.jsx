export default function playpage() {
  return (
    <div className='mx-auto flex items-center justify-center'>
      <h1>Coming soon...</h1>
    </div>
  )
}

// import Image from 'next/image'
// import dynamic from 'next/dynamic'
// import Loader from '@/components/Loader'
// import YouTube from '@/components/YouTube'
// import {Spotify} from '@/components/Spotify'
// // import {SocialCarousel} from '@/components/SocialCarousel'
// import {Button} from '@/components/ui/Button'
// import {Contact} from '@/containers/home-page/Contact'
// import {InfiniteScroll} from '@/components/InfiniteScroll'

// const NewGoog = dynamic(() => import('@/components/NewGoog'), {
//   ssr: false,
//   loading: () => <Loader />,
// })

// export default function PlayPage() {
//   return (
//     <main className='mx-auto w-full'>
//       <div className='flex flex-col'>
//         {/* Hero */}

//         <section className='relative block max-h-none min-h-screen bg-black'>
//           <div className='absolute inset-0 z-10 flex items-center justify-center'>
//             <div className='max-w-2xl text-center'>
//               <h1 className='mb-12 font-sansita text-6xl font-extrabold leading-none tracking-tighter text-white lg:text-[6rem]'>
//                 Sway Bae . Creator of{' '}
//                 <span className='relative ml-2 italic text-secondary underline underline-offset-8'>
//                   Chaos
//                 </span>
//               </h1>
//             </div>
//           </div>
//           <div className='opacity-90 brightness-[.2] saturate-150'>
//             <div className='min-h-auto relative size-full max-h-screen overflow-hidden'>
//               <div className='relative pt-[56.25%]'>
//                 <video
//                   autoPlay
//                   muted
//                   playsInline
//                   // loop
//                   src='videos/herovideo.mp4'
//                   title='Sway Bae Intro Video!'
//                   type='video/mp4'
//                   className='absolute left-0 top-0 box-border size-full overflow-clip'
//                 ></video>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* About */}

//         <section className='bg-[#ece2d7]'>
//           <div className='container mx-auto grid max-w-5xl grid-cols-1 px-6 pb-0 pt-6 sm:px-4 md:px-2 lg:grid-cols-2 lg:gap-x-12 lg:px-0'>
//             <article className='x'>
//               <h5 className='mt-4 text-lg uppercase leading-loose tracking-wider text-dark-fade lg:text-2xl'>
//                 Heya!
//               </h5>
//               <h2 className='mt-4 font-sansita text-6xl font-extrabold italic leading-[6rem] tracking-normal text-dark lg:text-[7rem]'>
//                 I&apos;m Sway.
//               </h2>
//               <p className='relative mb-6 mt-10 font-light leading-loose tracking-wider text-dark-tint lg:text-xl'>
//                 I&apos;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
//                 streaming and releasing videos throughout the week. I create family-friendly
//                 entertainment centered around the concepts of positive mental attitude in gaming
//                 with the mantra of leaving someone&apos;s day better than I found it.
//               </p>
//               <button className='w-full max-w-xs cursor-pointer rounded-3xl border bg-white py-3 font-bold uppercase leading-relaxed text-black shadow-soft hover:bg-light hover:shadow-hard active:bg-light-fade active:text-primary'>
//                 learn more!
//               </button>
//             </article>
//             <aside className='relative inset-[88%,0%,auto] z-50 mt-[-8rem] max-w-xl'>
//               <Image
//                 src='/cutout.png'
//                 alt='A cutout photo of Sway'
//                 width={800}
//                 height={1400}
//                 quality={100}
//                 priority={true}
//                 className='mb-0 inline-block max-w-full overflow-clip'
//               />
//             </aside>
//           </div>
//         </section>

//         {/* Worked With */}
//         <section className='bg-dark-fade'>
//           <div className='p-16 text-center text-light-tint'>
//             <h5 className='mb-0 w-full p-4 text-lg font-semibold uppercase'>
//               A few things and other things
//             </h5>
//             <div className='mx-auto flex flex-row items-center justify-center gap-16 px-4 pb-4 pt-2 text-center'>
//               <InfiniteScroll />
//             </div>
//           </div>
//         </section>

//         {/* Socials */}

//         <section className='bg-[#eef5ff]'>
//           <div className='mt-16 flex justify-end px-12'>
//             <Spotify />
//           </div>
//           {/* <div className='mt-16 flex flex-col items-center justify-center px-12'>
//             <SocialCarousel />
//             <div className='pt-4'>
//               <a href='https://www.throne.com/sway_bae' target='_blank' rel='noreferrer'>
//                 <h4 className='flex flex-row items-center justify-center italic tracking-tight text-black max-[400px]:text-xs sm:text-lg'>
//                   If you&apos;d like to support what I do:
//                   <span className='ml-1 mr-0.5 block font-black uppercase max-[300px]:hidden'>
//                     THRONE
//                   </span>
//                   <div className='ml-0.5 size-5 overflow-hidden rounded-full max-[400px]:ml-1 max-[400px]:size-4 sm:size-6'>
//                     <Image
//                       src='/Throne.jpg'
//                       alt='Throne'
//                       width={24}
//                       height={24}
//                       className='size-full'
//                     />
//                   </div>
//                 </h4>
//               </a>
//             </div>
//           </div> */}
//           <div className='mt-16 flex items-center justify-center px-12 text-center text-4xl text-dark-tint'>
//             <span className='mr-1 text-primary sm:mr-2'>
//               <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
//                 <path
//                   fill='currentColor'
//                   d='M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z'
//                 ></path>
//               </svg>
//             </span>
//             Latest
//             <a
//               href='https://www.youtube.com/sway_baetv/'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='mx-1 bg-gradient-to-tl from-purple-tint via-pink-tint to-pink-fade bg-clip-text text-transparent lg:mx-1.5'
//             >
//               YouTube
//             </a>
//             Videos
//           </div>
//           <div className='container mx-auto mb-24 mt-4 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2'>
//             <div className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
//               <YouTube vnum={0} />
//             </div>
//             <div className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
//               <YouTube vnum={1} />
//             </div>
//             <div className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
//               <YouTube vnum={2} />
//             </div>
//             <div className='rounded-lg border-2 border-white bg-white shadow-soft hover:shadow-hard'>
//               <YouTube vnum={3} />
//             </div>
//           </div>
//         </section>

//         {/* Calendar */}

//         <section className='min-h-screen bg-dark-fade'>
//           <div className='container mx-auto mb-8 mt-20 grid max-w-7xl grid-cols-1 px-6 pt-6 sm:px-4 md:px-2 lg:grid-cols-2 lg:gap-x-12 lg:px-0'>
//             <aside className='x'>
//               <div className='rounded-lg border-2 border-b2w bg-w2b p-2 shadow-soft xl:p-3'>
//                 <NewGoog />
//                 <div className='mb-0.5 mr-0.5 mt-1.5 flex justify-end md:mt-2 xl:mt-4'>
//                   <Button asChild variant='fun' size='sm'>
//                     <a
//                       href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       Add to Your Calendar
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </aside>
//             <article className='x'>
//               <h2 className='mt-4 font-sansita text-6xl font-extrabold italic leading-[6rem] tracking-normal text-light lg:text-[5rem]'>
//                 Stay up to date!
//               </h2>
//               <p className='relative mb-6 mt-10 font-light leading-loose tracking-wider text-gray-fade lg:text-xl'>
//                 Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum.
//                 Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum.
//                 Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum. Lorem impsum.
//                 Lorem impsum. Lorem impsum.
//               </p>
//               <button className='w-full max-w-xs cursor-pointer rounded-3xl border bg-secondary-fade py-3 font-bold uppercase leading-relaxed text-white shadow-soft hover:bg-secondary-tint hover:shadow-hard active:bg-secondary active:text-yellow'>
//                 Calendar Page
//               </button>
//             </article>
//           </div>
//         </section>

//         {/* Contact */}

//         <section className='border-t'>
//           <Contact />
//         </section>
//       </div>
//     </main>
//   )
// }
