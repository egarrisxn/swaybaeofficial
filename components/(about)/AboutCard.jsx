'use client'
import {useRef, useState} from 'react'
import MyButton from '@/components/(ui)/MyButton'

export default function AboutCard() {
  const [isShowMore, setIsShowMore] = useState(false)
  const contentRef = useRef(null)
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore)
    // Scroll to the content section when toggling content visibility
    if (contentRef.current && isShowMore) {
      contentRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <section
      ref={contentRef}
      className='mx-auto mt-12 max-w-4xl rounded-3xl border-0 p-2 md:mt-0 md:border-2 md:p-8 md:shadow-md md:shadow-purple-500/80 lg:p-16 4xl:px-24'
    >
      <div className='prose prose-slate transition-all duration-200 ease-in md:prose-base lg:prose-lg dark:prose-invert prose-h1:font-bold prose-h1:text-primary prose-h2:font-semibold prose-h2:text-primary/90 prose-h3:font-medium prose-h3:text-secondary prose-h4:font-normal  prose-h4:text-secondary/90 prose-a:text-sky-500 hover:prose-a:text-sky-700 prose-blockquote:border-primary  prose-blockquote:text-secondary prose-code:text-pink prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary prose-th:bg-cyan  prose-th:text-xl prose-img:w-full prose-img:rounded prose-img:border prose-img:bg-light prose-img:p-2 prose-img:shadow-md'>
        <h1 className='lobster ml-1 text-[3rem] xl:text-[4rem]'>Hello, I'm Sway!</h1>
        <h3>
          I am a Full-Time Content Creator since June of 2021. Currently, I'm partnered with both
          Twitch and YouTube, streaming and releasing videos multiple times per week.
        </h3>
        <p>
          I create family-friendly entertainment centered around the concepts of positive mental
          attitude in gaming with the mantra of leaving someone's day better than I found it.
        </p>
        <p>
          My favorite part of streaming is the amazing community. You can find our Discord as you
          explore the website, but it is a very inclusive and supportive community that we have
          cultivated and a great place to connect outside of streams!
        </p>
        <blockquote>
          "Did I ever imagine this would be my lifestyle, even five years ago? Nope. Do I love it?
          Entirely!"
        </blockquote>
        {isShowMore && (
          <>
            <p>
              In addition, I am primarily a Hearthstone streamer, with a focus on Battlegrounds. I
              also enjoy Strategy games in general, Survival games, Indie games, Simulator games,
              Roguelike games, Platformers, and many more!
            </p>
            <p className='text-secondary'>A few notable accolades include:</p>
            <ul className='mb-4 list-disc lg:ml-8'>
              <li>
                3rd place in Blizzard's Hearthstone Battle of the Boars Tournament{' '}
                <span className='font-semibold'>(May 2021)</span>
              </li>
              <li>
                Casting the Gaming Stadium Hearthstone Tournament.{' '}
                <span className='font-semibold'>(June 2021)</span>
              </li>
              <li>
                Casting and Hosting multiple Dreamhack Community Clash tournaments.{' '}
                <span className='font-semibold'>(2021-2022)</span>
              </li>
              <li>
                Casting 4 series of Super Girl Gamer Pro Hearthstone Tournaments.{' '}
                <span className='font-semibold'>(2021-2023)</span>
              </li>
              <li>
                Multiple Battle.net Launcher Feature events, including featured streams and curated
                YouTube videos just for Hearthstone.
              </li>
              <li>
                Producing, hosting, and casting one of the earliest AND largest grassroots
                tournaments for Hearthstone Battlegrounds, with close to{' '}
                <span className='font-semibold underline underline-offset-2'>
                  100 participants!
                </span>
              </li>
            </ul>
            <p className='text-secondary'>
              If you'd like to work with me, I'd love to hear from you! You can use the contact form
              in the business inquiries section below!
            </p>
            <p>
              As I often say, thank you for being a part of my journey, and allowing me to be a part
              of yours!
            </p>
            <p className='text-2xl font-semibold'>
              <span className='font-medium text-primary'>XOXO,</span>
              <br />
              Sway Bae
            </p>
          </>
        )}
      </div>
      <hr className='my-8 border-secondary' />
      <div className='flex justify-center'>
        <MyButton onClick={toggleReadMoreLess}>{isShowMore ? 'Return' : 'Read More'}</MyButton>
      </div>
    </section>
  )
}
