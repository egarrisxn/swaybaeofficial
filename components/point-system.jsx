import {Card} from './ui/card'
import {Table, TableBody, TableCell, TableRow} from './ui/table'
import {ScrollArea, ScrollBar} from './ui/scroll-area'

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

export function PointSystem() {
  return (
    <Card className='space-y-6 bg-gradient-to-bl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Point System</h2>
      <div className='flex flex-col gap-4 md:gap-6'>
        <ScrollArea className='w-72 whitespace-nowrap rounded-lg border py-1 xs:w-[310px] small:w-[410px] midsmall:w-[510px] md:w-[680px] lg:w-[905px] xl:w-[1200px] xl:border-0 2xl:w-[1460px]'>
          <div className='w-max'>
            <Table className='2xl:text-base'>
              <TableBody>
                <PointTableRow label='1 bit' points='1 point' />
                <PointTableRow label='$1 tip' points='100 points' />

                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell colSpan={3} className='font-semibold'>
                    *Additional Points for New Multi-Month Subscriptions
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className='font-semibold text-purple-600 dark:text-pink-400'>
                    3 months
                  </TableCell>
                  <TableCell className='font-semibold text-purple-600 dark:text-pink-400'>
                    6 months
                  </TableCell>
                  <TableCell className='font-semibold text-purple-600 dark:text-pink-400'>
                    12 months
                  </TableCell>
                  <TableCell className='text-right font-semibold'>
                    **Extra Points for Gifted Subs from Valorant
                  </TableCell>
                </TableRow>
                {[
                  {
                    label: 'Prime/Tier 1 Sub',
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
                  points) + 1 bonus gifted sub (600 points) + 100 bonus points = 3,700 total points
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
  )
}
