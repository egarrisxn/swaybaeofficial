'use client'
import * as React from 'react'
import {CalendarDays, Twitch, Dumbbell, Music, Trophy} from 'lucide-react'
import {Card} from '../../components/ui/card'
import {Progress} from '../../components/ui/progress'
import {Badge} from '../../components/ui/badge'
import {Table, TableBody, TableCell, TableRow} from '../../components/ui/table'
import {ScrollArea, ScrollBar} from '../../components/ui/scroll-area'

const goals = [
  {
    points: 10000,
    title: 'Chat picks our Pizza toppings for our pizza dinner',
    description: "Chat will vote on the sauces and dips for Ethan and Sway's dinner!",
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 20000,
    title: 'Bring back the "MOAR CAFFEINE" channel point button',
    description:
      'Instead of "hydrate", we caffeinate! For the rest of the Subathon, Chat can caffeinate Sway! (within reason)',
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 25000,
    title: 'Unlock Reaction Test during Gingerbread House Stream',
    description:
      'The 24th will be a Gingerbread baking stream. Whenever a sub/cheer happens, a reaction test will auto start and Sway needs to make it back to her computer and not fail the test, otherwise...uh oh!',
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 30000,
    title: 'Solo Duos until first place',
    description:
      "Sway will duo queue with herself on her phone and won't stop until she gets a first!",
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 40000,
    title: 'No "sway swears" for 1 hour',
    description: 'No "butts", no "heck", and especially no "heckin butts" for a whole hour.',
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 50000,
    title: 'Play a Hearthstone Battlegrounds Game with an XBOX controller on high sensitivity',
    description:
      'Exactly what it sounds like. Hearthstone Battlegrounds. Xbox controller. These two things were not meant to be.',
    completed: true,
    videoLink: null,
    date: 'Happening on Thurs. Dec. 26th',
  },
  {
    points: 60000,
    title: 'Give Ethan a Nerf Gun',
    description:
      "Chat gives Ethan a present - it's a nerf gun to randomly surprise Sway. *Thaaaaanks a lot, Chat.*",
    completed: true,
    videoLink: null,
    date: '.',
  },
  {
    points: 70000,
    title: 'Sway plays "Would you Rather" with Chat',
    description: 'Sway has some "Would you Rather" questions to play with Chat!',
    completed: true,
    videoLink: null,
    date: 'Happening on Sat. Dec. 28th',
  },
  {
    points: 80000,
    title: 'Unlock "Time Out Day"',
    description:
      'Time out day will be put on the calendar! Time out day allows chatters to duel for time outs, but be careful, If you initiate a duel and lose, the consequences are so much worse!',
    completed: true,
    videoLink: null,
    date: 'Happening on Fri. Dec. 27th',
  },
  {
    points: 90000,
    title: 'Domestic Beer Taste Test Challenge',
    description:
      'Sway has been in the service industry for YEARS, leading to a good knowledge on beer, but is it good enough? She will be blindfolded and taste test common American Domestic beers and do her best!',
    completed: true,
    videoLink: null,
    date: 'Happening on Sun. Dec. 29th',
  },
  {
    points: 100000,
    title: 'Tilt Game (I am Fish)',
    description:
      "Last year, Sway had a pretty miserable time playing Only Up, and this year, we had to bring back the frustrating games with I am Fish. Watch her rage! (well, she doesn't really rage, just gets really sad)",
    completed: true,
    videoLink: null,
    date: 'Happening on Thurs. Dec. 26th',
  },
  {
    points: 150000,
    title: 'Condiment Tier List',
    description:
      "Even though IRL Tier Lists are a part of Sway's schedule this Subathon, this one is particularly awful, so it deemed itself worthy of a point goal. Sway will taste and rate the condiments that are staples to the pantry!",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 200000,
    title: "Don't Laugh Challenge (with water in mouth)",
    description:
      "Chatters have an opportunity to submit clips that they think will make Sway laugh, and Sway will attempt not to. She did do this last year, but this year there's a twist - she has to keep water in her mouth while trying not to laugh! (RIP computer)",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 250000,
    title: 'Goat Sim 3 with Ethan',
    description: 'Sway and Ethan take on Goat Simulator 3!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 300000,
    title: 'Merch Giveaway',
    description: 'Sway gives away some Bae Squad merch!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 350000,
    title: 'Ethan Blindfolded Makeup',
    description:
      "Ethan has done Sway's makeup twice now - this time, he's going to be blindfolded. What could go wrong?",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 400000,
    title: 'Evil Sway',
    description:
      'Evil Sway makes her epic return for some games with the community and some special Holiday Roasting.',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 450000,
    title: 'Super Sour Candy',
    description:
      'Sway and Ethan had a whole lot of spice last Subathon. This time, Sway found the most sour candy she possibly could for them to try to tackle!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 500000,
    title: 'Sway at Nite',
    description:
      '**CONTENT WARNING** Sway at Nite returns again! Join Sway for some unexpected cursing and adult themes for one night only!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 550000,
    title: 'Dog Treat Cooking Stream',
    description:
      "Sway gets on Biff and Waffles' level and takes her cooking stream to the floor to make some dog treats for them!",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 600000,
    title: 'BONUS GOAL: unlock Sway at Nite "Would you Rather" with chat',
    description:
      "**CONTENT WARNING** Sway at Nite takes on a game of Would you Rather, but MUCH less family friendly this time. This is a bonus goal, so it will only occur if the goal of Sway at Nite hasn't happened before this is achieved!",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 650000,
    title: 'Brann Genderbend Cosplay',
    description:
      'Sway transforms herself into her beloved Brann Bronzebeard, bronze beard and all.',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 700000,
    title: 'Last Day becomes a 24 hour stream',
    description:
      'Instead of 12pm-12am on January 1st, Sway will stream from 12pm January 1st until 12 pm January 2nd to wrap up the most epic Subathon!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 750000,
    title: 'Rewrapped Food Competition',
    description:
      "Sway and 1-2 of her friends will compete to recreate a common packaged snack (i.e. Oreos, Goldfish, Twinkies etc) of chat's choosing!",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 800000,
    title: 'Custom Crocs',
    description:
      'Sway hates Crocs. Like a lot. Chat will help her design some special custom ones, just for her! She will have to order and wear them!',
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 1000000,
    title: 'Hair Dye',
    description: "Chat picks the new color of Sway's hair and Sway will stream the dying process!",
    completed: false,
    videoLink: null,
    date: '.',
  },
  {
    points: 1500000,
    title: 'Tattoo',
    description:
      'Sway gives chat 3 options which they vote on to tattoo on herself, then she will stream herself getting the tattoo!',
    completed: false,
    videoLink: null,
    date: '.',
  },
]

const PointsProgress = ({currentPoints, nextGoalPoints}) => {
  const progress = (currentPoints / nextGoalPoints) * 100
  return (
    <Card className='space-y-6 bg-gradient-to-br from-purple-100 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold sm:text-xl md:text-xl xl:text-2xl'>Current Progress</h2>
        <span className='text-sm font-semibold text-purple-600 md:text-lg dark:text-pink-400'>
          {currentPoints.toLocaleString()} / {nextGoalPoints.toLocaleString()} points
        </span>
      </div>

      <div className='py-1'>
        <Progress
          value={progress}
          className='h-5 rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900'
        />
      </div>
      <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
        {Math.ceil(nextGoalPoints - currentPoints).toLocaleString()} points until next goal
      </div>
    </Card>
  )
}

const PointTableRow = ({label, points, extras = []}) => (
  <TableRow>
    <TableCell>{label}</TableCell>
    <TableCell className='font-semibold'>{points}</TableCell>
    {extras.map((extra, index) => (
      <TableCell key={index} className={extra.className || ''}>
        {extra.value}
      </TableCell>
    ))}
  </TableRow>
)

const InfoCard = ({title, content, footer}) => (
  <Card className='space-y-3 p-3 md:p-4'>
    <h4 className='font-semibold xl:text-lg'>{title}</h4>
    <p className='text-sm text-slate-700 xl:text-base dark:text-slate-300'>{content}</p>
    {footer && (
      <div className='rounded-md bg-slate-100 p-2 text-sm xl:text-base dark:bg-slate-800'>
        {footer}
      </div>
    )}
  </Card>
)

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
      {/* //! xxx */}
      <Card className='space-y-6 bg-gradient-to-br from-purple-200 to-pink-100 p-8 text-center shadow-xl dark:from-gray-800 dark:to-gray-900'>
        <h1 className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl'>
          Sway&apos;s Subathon Season!
        </h1>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          Get ready for 10 days of excitement, surprises, and unforgettable moments with The Bae
          Squad!
        </p>
        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <div className='flex items-center gap-2'>
            <CalendarDays className='text-purple-600 dark:text-pink-400' />
            <span className='text-gray-800 dark:text-gray-200'>
              Dec. 23rd, 2024 - Jan. 1st, 2025
            </span>
          </div>
          <a
            href='https://www.twitch.tv/sway_bae'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-purple-700 hover:underline dark:text-pink-400'
          >
            <Twitch />
            <span>Watch on Twitch</span>
          </a>
        </div>
      </Card>
      {/* //! xxx */}
      <PointsProgress currentPoints={123754} nextGoalPoints={150000} />
      {/* //! xxx */}
      <Card className='space-y-6 bg-gradient-to-tl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
        <h2 className='text-lg font-bold sm:text-xl md:text-xl xl:text-2xl'>Event Details</h2>
        <ol className='list-outside list-decimal space-y-4 px-6 pb-4 leading-relaxed text-slate-700 marker:text-blue-500 lg:text-lg dark:text-slate-200'>
          <li>
            First, we&apos;ve got POINTS! These will be used to accomplish goals throughout our
            event. Check the point system guide for all the details, including point structure, fun
            promotions, and more!
          </li>
          <li>
            Next up are the GOALS! Let me just say that this year, we didn&apos;t hold back! Take a
            look at the list and see which goals you want to see come to life.
          </li>
          <li>
            Finally, we&apos;ve set up a few extra incentives throughout our adventure together to
            keep me active, energized, and an easy target for all the laughs!
          </li>
        </ol>
      </Card>
      {/* //! xxx */}
      <Card className='space-y-6 bg-gradient-to-bl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
        <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Point System</h2>
        <div className='flex flex-col gap-4 md:gap-6'>
          <ScrollArea className='w-72 whitespace-nowrap rounded-lg border py-1 xs:w-80 small:w-[420px] midsmall:w-[520px] md:w-[690px] lg:w-[950px] xl:w-[1205px] xl:border-0 2xl:w-[1465px]'>
            <div className='w-max'>
              <Table>
                <TableBody>
                  <PointTableRow label='1 bit' points='1 point' />
                  <PointTableRow label='$1 tip' points='100 points' />
                  <PointTableRow label='Prime Sub' points='400 points' />
                  <TableRow>
                    <TableCell colSpan={6} className='font-semibold'>
                      *Additional Points for New Multi-Month Subscriptions
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className='font-semibold text-[#3eb8ce]'>3 months</TableCell>
                    <TableCell className='font-semibold text-[#3eb8ce]'>6 months</TableCell>
                    <TableCell className='font-semibold text-[#3eb8ce]'>12 months</TableCell>
                    <TableCell className='text-right font-semibold'>
                      **Extra Points for Gifted Subs from Valorant
                    </TableCell>
                  </TableRow>
                  {[
                    {
                      label: 'Tier 1 Sub',
                      points: '600 points',
                      extras: [
                        {value: '+300 points'},
                        {value: '+700 points'},
                        {value: '+1500 points'},
                        {value: '+100 points', className: 'text-right font-semibold'},
                      ],
                    },
                    {
                      label: 'Tier 2 Sub',
                      points: '1000 points',
                      extras: [
                        {value: '+600 points'},
                        {value: '+1400 points'},
                        {value: '+3000 points'},
                        {value: '+200 points', className: 'text-right font-semibold'},
                      ],
                    },
                    {
                      label: 'Tier 3 Sub',
                      points: '2500 points',
                      extras: [
                        {value: '+1500 points'},
                        {value: '+3500 points'},
                        {value: '+7500 points'},
                        {value: '+500 points', className: 'text-right font-semibold'},
                      ],
                    },
                  ].map((row, index) => (
                    <PointTableRow key={index} {...row} />
                  ))}
                </TableBody>
              </Table>
            </div>
            <ScrollBar className='bg-white' orientation='horizontal' />
          </ScrollArea>

          <div className='mx-auto mt-2 flex flex-col justify-center gap-6 sm:flex-row'>
            <div className='order-1 flex flex-col space-y-4 sm:w-1/2 sm:items-center md:order-1 md:w-2/5 xl:w-1/3'>
              <Card className='flex w-fit flex-col items-center space-y-2 rounded-lg border-0 bg-purple-50 p-4 sm:w-full dark:bg-purple-900/30'>
                <h4 className='font-semibold xl:text-lg'>*Current Twitch Promotions</h4>
                <ul className='list-inside list-disc space-y-1 text-sm xl:text-base'>
                  <li>25% off new 1-month subs</li>
                  <li>25% off new 3-month subs</li>
                  <li>30% off new 6-month subs</li>
                </ul>
              </Card>
              <div className='mx-auto hidden pt-2 text-center sm:flex'>
                <a
                  href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 sm:inline-flex'
                >
                  Learn more about Promotion & End-of-Year Bonus!
                </a>
              </div>
            </div>
            <div className='order-2 space-y-4 sm:w-1/2 md:order-2 md:w-3/5 xl:w-2/3'>
              <InfoCard
                title='**Bonus Gift Subs Program'
                content='For every five gift subs purchased for a channel, Valorant will add one bonus gift sub. Additional points will be added based on the tier and number of gifted subs from Valorant.'
                footer={
                  <>
                    <span className='font-semibold'>Example:</span> 5 Tier 1 gifted subs (3,000
                    points) + 1 bonus gifted sub (600 points) + 100 bonus points = 3,700 total
                    points
                  </>
                }
              />
            </div>
          </div>
          <div className='pl-1 sm:hidden'>
            <a
              href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4'
            >
              Learn more about Promotion & End-of-Year Bonus!
            </a>
          </div>
        </div>
      </Card>
      {/* //! xxx */}
      <Card className='space-y-6 bg-gradient-to-tr from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
        <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Sub Goals</h2>
        <div className='grid gap-4 sm:p-2 md:p-4 xl:p-4'>
          {goals.map((goal, index) => (
            <Card
              key={index}
              className={`rounded-lg border p-4 shadow-md transition-transform hover:scale-105 ${
                goal.completed
                  ? 'bg-gradient-to-br from-white to-green-300/20 dark:from-green-800/30 dark:to-black'
                  : 'bg-gradient-to-br from-gray-100 to-white dark:from-slate-900 dark:to-slate-950'
              }`}
            >
              <div className='flex h-full flex-col space-y-3'>
                <div className='flex items-center justify-between'>
                  <Badge className='text-sm font-medium dark:text-black'>
                    {goal.points.toLocaleString()} points
                  </Badge>
                  {goal.completed && (
                    <Badge
                      variant='success'
                      className='border-slate-950/40 font-medium dark:border-slate-50'
                    >
                      Completed!
                    </Badge>
                  )}
                </div>
                <h4 className='text-lg font-semibold leading-tight text-gray-900 xl:text-xl dark:text-gray-200'>
                  {goal.title}
                </h4>
                <p className='flex flex-1 text-pretty text-sm leading-snug text-gray-700 xl:text-base dark:text-gray-100'>
                  {goal.description}
                </p>

                {goal.date && (
                  <p className='flex justify-end text-lg font-semibold text-gray-900 xl:text-xl dark:text-gray-50'>
                    {goal.date}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>
      {/* //! xxx */}
      <Card className='space-y-6 bg-gradient-to-bl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
        <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Extra Incentives</h2>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'>
          <Card className='space-y-3 p-3 md:p-4'>
            <div className='flex items-center gap-2'>
              <Dumbbell className='dark:pink-400 size-4 text-purple-600 md:size-5' />
              <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
                Fitness Goals
              </h4>
            </div>
            <p className='text-muted-foreground text-sm'>
              Every <b>5,000 points</b>, Sway will spin the <i>infamous</i> fitness wheel for
              exercises! The wheel includes 5 crunches, 5 pushups, 5 bicep curls, 5 sqauts, 5
              burpees, and 1 minute planks.
            </p>
          </Card>

          <Card className='space-y-3 p-3 md:p-4'>
            <div className='flex items-center gap-2'>
              <Music className='dark:pink-400 size-4 text-purple-600 md:size-5' />
              <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
                Song Requests
              </h4>
            </div>
            <p className='text-muted-foreground text-sm'>
              Every <b>20,000 points</b> unlocks a Song Request power hour!{' '}
              <i>
                *Note: Song requests must be family-friendly and will be disabled during Sway at
                Nite, if it&apos;s reached.*
              </i>
            </p>
          </Card>

          <Card className='space-y-3 p-3 md:p-4'>
            <div className='flex items-center gap-2'>
              <Trophy className='dark:pink-400 size-4 text-purple-600 md:size-5' />
              <h4 className='text-lg font-semibold leading-tight text-gray-900 dark:text-gray-200'>
                Top Contributors
              </h4>
            </div>
            <p className='text-muted-foreground text-sm'>
              The <b>Top 5 contributors</b> get a personalized alert for any Twitch event(i.e. subs,
              gifted subs, bits), along with an on-screen arrival action for their first message
              sent in stream!
            </p>
          </Card>
        </div>
      </Card>
    </div>
  )
}
