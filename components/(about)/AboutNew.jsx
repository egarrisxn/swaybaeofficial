// import Image from 'next/image'
// import {PageName} from '@/components/(other)/PageName'
// // import SectionBreak from '@/components/SectionBreak'

// const prose =
//   'prose prose-slate transition-all duration-200 ease-in md:prose-base lg:prose-lg dark:prose-invert'

// export default function AboutNew() {
//   return (
//     <main className='min-h-screen w-full p-0'>
//       <label className='sr-only'>About</label>
//       {/* <SectionBreak text='About' /> */}
//       <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16 4xl:max-w-screen-3xl'>
//         <PageName>About</PageName>
//         <br />
//         {/* ----------About Body---------- */}
//         <div className='mx-auto my-8 sm:px-2 md:px-8 lg:my-16 xl:px-12 4xl:px-0'>
//           {/* ----------Header/Text & Photo---------- */}
//           <div className='mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-12 3xl:gap-x-14 4xl:gap-x-24'>
//             <section
//               className={`${prose} order-2 max-w-xl prose-h1:font-bold prose-h1:text-primary prose-h3:font-medium prose-h3:text-secondary prose-h4:font-normal prose-h4:text-secondary/90 prose-blockquote:border-primary prose-blockquote:text-secondary lg:order-1 lg:max-w-none`}
//             >
//               <h1 className='lobster ml-1 text-[3rem] underline underline-offset-4 md:text-[3.5rem] lg:text-[2.5rem] xl:text-[3.5rem] 3xl:text-[3.8rem] 4xl:text-[5.3rem]'>
//                 I&rsquo;m Sway!
//               </h1>
//               <h3 className='md:mt-[-1.25rem] lg:mt-[-1rem] lg:text-[1.2rem] lg:leading-5 xl:mt-[-1.5rem] xl:text-[1.4rem] xl:leading-6 2xl:mt-[-1.7rem] 2xl:leading-7 4xl:mt-[-2.5rem] 4xl:text-[1.9rem] 4xl:leading-9'>
//                 I&rsquo;m a Full-Time Content Creator, currently partnered with Twitch and YouTube,
//                 streaming and releasing videos throughout the week.
//               </h3>
//               <p className='lg:text-[0.9rem] lg:leading-6 xl:text-[1.1rem] 3xl:leading-7 4xl:text-[1.7rem] 4xl:leading-8'>
//                 <span className='font-semibold'>I create</span> family-friendly entertainment
//                 centered around the concepts of positive mental attitude in gaming with the mantra
//                 of leaving someones day better than I found it. My favorite part of streaming is the
//                 amazing community. You can find our Discord as you explore the website, but it is a
//                 very inclusive and supportive community that we have cultivated and a great place to
//                 connect outside of streams!
//               </p>
//               <blockquote className='lg:mt-[-0.3rem] lg:text-[0.9rem] lg:leading-5 xl:mt-[-0.5rem] xl:text-[1.1rem] 2xl:text-[1rem] 3xl:leading-7 4xl:mt-[-0.7rem] 4xl:text-[1.7rem] 4xl:leading-8'>
//                 <span className='font-semibold'>Did I ever</span> imagine this would be my
//                 lifestyle, even five years ago? Nope. Do I love it? Entirely!
//               </blockquote>
//               <p className='lg:mt-[-0.3rem] lg:text-[0.9rem] lg:leading-6 xl:mt-[-0.5rem] xl:text-[1.1rem] 2xl:leading-6 3xl:leading-7 4xl:mt-[-0.7rem] 4xl:text-[1.7rem] 4xl:leading-8'>
//                 <span className='font-semibold'>In addition,</span> I am primarily a Hearthstone
//                 streamer, with a focus on Battlegrounds. I also enjoy Strategy games in general,
//                 Survival games, Indie games, Simulator games, Roguelike games, Platformers, and many
//                 more!
//               </p>
//               <p className='lg:mt-[-0.3rem] lg:text-[0.9rem] lg:leading-6 xl:mt-[-0.5rem]  xl:text-[1.1rem] 2xl:leading-6 3xl:leading-7 4xl:mt-[-0.7rem] 4xl:text-[1.7rem] 4xl:leading-8'>
//                 <span className='font-semibold'>If you&rsquo;d like</span> to work with me,
//                 I&rsquo;d love to hear from you! You can use the contact form in the business
//                 inquiries section below! As I often say, thank you for being a part of my journey,
//                 and allowing me to be a part of yours!{' '}
//                 <span className='font-semibold text-secondary'>&ndash; Sway Bae</span>
//               </p>
//             </section>
//             <section className='order-1 lg:order-2 2xl:mt-4 4xl:mt-8'>
//               <Image
//                 src='/biff.jpg'
//                 alt='Product screenshot'
//                 className='rounded-2xl border-2 shadow-md shadow-purple-500/80'
//                 width={1440}
//                 height={1800}
//               />
//             </section>
//           </div>
//           {/* ----------Accolades---------- */}
//           <section
//             className={`${prose} max-w-xl prose-h3:font-medium  prose-h3:text-secondary prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary lg:max-w-none`}
//           >
//             <br className='hidden md:block' />
//             <h3 className='4xl:leading-9'>A few notable accolades include:</h3>
//             {/* <ul className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-6 lg:gap-y-0 xl:grid-cols-3 xl:grid-rows-2 4xl:gap-x-20 '> */}
//             <ul className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-10 lg:gap-y-0 xl:grid-cols-3 xl:grid-rows-2 4xl:gap-x-12'>
//               <li>
//                 3rd place in Blizzard&rsquo;s Hearthstone Battle of the Boars Tournament.{' '}
//                 <span className='font-medium'>(May 2021)</span>
//               </li>
//               <li>
//                 Casting the Gaming Stadium Hearthstone Tournament.{' '}
//                 <span className='font-medium'>(June 2021)</span>
//               </li>
//               <li>
//                 Casting and Hosting multiple Dreamhack Community Clash tournaments.{' '}
//                 <span className='font-medium'>(2021-2022)</span>
//               </li>
//               <li>
//                 Casting 4 series of Super Girl Gamer Pro Hearthstone Tournaments.{' '}
//                 <span className='font-medium'>(2021-2023)</span>
//               </li>
//               <li>
//                 Multiple Battle.net Launcher Feature events, including featured streams and curated
//                 YouTube videos just for Hearthstone.
//               </li>
//               <li>
//                 Producing, hosting, and casting one of the earliest AND largest grassroots
//                 tournaments for Hearthstone Battlegrounds, with close to{' '}
//                 <span className='underline underline-offset-2'>100 participants!</span>
//               </li>
//             </ul>
//           </section>
//         </div>
//       </div>
//     </main>
//   )
// }
