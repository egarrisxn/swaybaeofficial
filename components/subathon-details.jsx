import {Card} from './ui/card'

export function SubathonDetails() {
  return (
    <Card className='space-y-6 bg-gradient-to-tl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Event Details</h2>
      <ol className='list-outside list-decimal space-y-4 px-6 pb-4 text-slate-700 marker:text-purple-600 lg:text-lg xl:space-y-6 xl:pl-8 xl:pr-12 2xl:text-xl dark:text-slate-200 dark:marker:text-pink-400'>
        <li>
          First off, we&apos;ve got POINTS! These will be used to accomplish goals throughout the
          Subathon. Check the point system guide below for details!
        </li>
        <li>
          Next up are the GOALS! Let me just say that this year, I didn&apos;t hold back! Take a
          look at the list below and see what I have planned for us!
        </li>
        <li>
          Also, I&apos;ve set up a few extra INCENTIVES throughout the subathon to keep me active,
          energized, and an easy target for all the laughs!
        </li>
        <li>
          Finally, there are a couple fun prizes for our top contributors from the Subathon. See the
          top contributors list below for more info!
        </li>
      </ol>
    </Card>
  )
}
