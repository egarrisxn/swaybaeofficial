import {Card} from './ui/card'

export function SubathonDetails() {
  return (
    <Card className='space-y-6 bg-gradient-to-tl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:from-gray-800 dark:to-black'>
      <h2 className='text-lg font-bold sm:text-xl md:text-xl xl:text-2xl'>Event Details</h2>
      <ol className='list-outside list-decimal space-y-4 px-6 pb-4 leading-relaxed text-slate-700 marker:text-blue-500 lg:text-lg dark:text-slate-200'>
        <li>
          First, we&apos;ve got POINTS! These will be used to accomplish goals throughout our event.
          Check the point system guide for all the details, including point structure, fun
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
  )
}
