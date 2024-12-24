import {Card} from './ui/card'

export function SubathonDetails() {
  return (
    <Card className='bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
      <article>
        <h3 className='mb-4 pt-4 text-xl font-bold md:text-2xl xl:text-3xl'>Event Details</h3>
        <ol className='list-outside list-decimal space-y-4 px-6 pb-4 pt-2 leading-relaxed text-slate-700 marker:text-blue-500 xl:text-xl dark:text-slate-200'>
          <li>
            First, we&apos;e got POINTS! These will be used to accomplish goals throughout our
            event. Check the point system guide for all the details, including point structure, fun
            promotions, and more!
          </li>
          <li>
            Next up are the GOALS! Let me just say that this year, we didn&apos;t hold back! Take a
            look at the list and see which goals you want to see come to life.
          </li>
          <li>
            Finally, I&apos;e set up a few extra incentives throughout our adventure together to
            keep me active, energized, and an easy target for all the laughs!
          </li>
        </ol>
      </article>
    </Card>
  )
}
