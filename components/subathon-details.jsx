import {Card} from './ui/card'

export function SubathonDetails() {
  return (
    <Card className='bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
      <article className='prose max-w-none sm:prose-lg lg:prose-2xl dark:prose-invert'>
        <h3 className='mb-0 pt-6 text-center text-3xl font-bold text-neutral-tint md:text-5xl xl:text-6xl dark:text-foreground'>
          The Details!
        </h3>
        <ol>
          <li>
            First, POINTS! Use these to unlock goals throughout the event. Check the point system
            guide for all the details, including the point structure, current Twitch promotions, and
            more!
          </li>
          <li>
            Next, GOALS! We didn&apos;t hold back this year—take a look at the list and see what
            surprises await. Will this be the year Sway finally gets those Crocs? Stay tuned!
          </li>
          <li>
            Finally, enjoy exclusive incentives along the way, including activities to keep things
            lively and engaging!
          </li>
        </ol>
      </article>
    </Card>
  )
}
