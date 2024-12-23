import {Card} from './ui/card'

export function SubathonDetails() {
  return (
    <Card className='bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
      <article className='prose max-w-none sm:prose-lg lg:prose-2xl dark:prose-invert'>
        <h3 className='mb-4 pt-4 text-2xl font-bold md:text-3xl xl:text-4xl'>The Details</h3>
        <ol>
          <li>
            First, we got POINTS! These will be used to accomplished goals throughout our event.
            Check the point system guide for all the details, including point structure, fun
            promotions, and more!
          </li>
          <li>
            Next up are the GOALS! Let me just that this year, we didn&apos;t hold back! take a look
            at the list and see which goals you want to see come to life.
          </li>
          <li>
            Finally, I set up a few extra incentives throughout our adventure together to keep me
            active, engergized, and a an easy target for all the laughs!
          </li>
        </ol>
      </article>
    </Card>
  )
}
