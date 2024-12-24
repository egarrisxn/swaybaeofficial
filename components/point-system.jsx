'use client'
import * as React from 'react'
import {Card} from './ui/card'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table'
import {ScrollArea, ScrollBar} from './ui/scroll-area'

export function PointSystem() {
  return (
    <Card className='space-y-6 bg-white p-4 shadow backdrop-blur-sm md:p-4 lg:p-6 dark:bg-black'>
      <h3 className='mb-4 pt-4 text-xl font-bold md:text-2xl xl:text-3xl'>Point System</h3>
      <div className='flex flex-col gap-4 md:gap-6'>
        <ScrollArea className='small:w-[420px] midsmall:w-[520px] w-72 whitespace-nowrap rounded-lg border py-1 xs:w-80 md:w-[690px] lg:w-[950px] xl:w-[1205px] xl:border-0 2xl:w-[1465px]'>
          <div className='w-max'>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>1 bit</TableCell>
                  <TableCell className='font-semibold'>1 point</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$1 tip</TableCell>
                  <TableCell className='font-semibold'>100 points</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Prime Sub</TableCell>
                  <TableCell className='font-semibold'>400 points</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell colSpan={3} className='font-semibold'>
                    *Additional Points for New Multi-Month Subscriptions
                  </TableCell>
                  <TableCell></TableCell>
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
                <TableRow>
                  <TableCell>Tier 1 Sub</TableCell>
                  <TableCell className='font-semibold'>600 points</TableCell>
                  <TableCell>+300 points</TableCell>
                  <TableCell>+700 points</TableCell>
                  <TableCell>+1500 points</TableCell>
                  <TableCell className='text-right font-semibold'>+100 points</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier 2 Sub</TableCell>
                  <TableCell className='font-semibold'>1000 points</TableCell>
                  <TableCell>+600 points</TableCell>
                  <TableCell>+1400 points</TableCell>
                  <TableCell>+3000 points</TableCell>
                  <TableCell className='text-right font-semibold'>+200 points</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tier 3 Sub</TableCell>
                  <TableCell className='font-semibold'>2500 points</TableCell>
                  <TableCell>+1500 points</TableCell>
                  <TableCell>+3500 points</TableCell>
                  <TableCell>+7500 points</TableCell>
                  <TableCell className='text-right font-semibold'>+500 points</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <ScrollBar className='bg-white' orientation='horizontal' />
        </ScrollArea>

        {/* Repeat the same for the second table */}
        <div className='mx-auto flex flex-col justify-center gap-6 md:mt-2 md:flex-row md:gap-6'>
          <div className='order-2 space-y-4 md:order-1 md:w-2/5 xl:w-1/3'>
            <div className='flex w-full flex-col items-start space-y-2 rounded-lg bg-purple-50 px-4 py-6 sm:w-fit md:w-full md:items-center md:px-0 xl:w-fit xl:px-10 xl:py-4 dark:bg-purple-900/30'>
              <h4 className='flex items-center gap-1 font-semibold md:gap-2 xl:text-lg'>
                {/* <AlertCircle className='size-4 text-purple-600' /> */}*Current Twitch Promotions
              </h4>
              <ul className='list-inside list-disc space-y-1 text-sm xl:text-base'>
                <li>25% off new 1-month subs</li>
                <li>25% off new 3-month subs</li>
                <li>30% off new 6-month subs</li>
              </ul>
            </div>
            <a
              href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 pl-1 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 xl:text-sm'
            >
              Learn more about Promotion & End-of-Year Bonus!
            </a>
          </div>
          <div className='order-1 space-y-4 md:order-2 md:w-3/5 xl:w-2/3'>
            <Card className='space-y-3 p-3 md:p-4'>
              <h4 className='font-semibold xl:text-lg'> **Bonus Gift Subs Program</h4>
              <p className='text-sm text-slate-700 xl:text-base dark:text-slate-300'>
                For every five gift subs purchased for a channel, Valorant will add one bonus gift
                sub. Additional points will be added based on the tier and number of gifted subs
                from Twitch.
              </p>
              <div className='rounded-md bg-slate-100 p-2 text-sm xl:text-base dark:bg-slate-800'>
                <span className='font-semibold'>Example:</span> 5 Tier 1 gifted subs (3,000 points)
                + 1 bonus gifted sub (600 points) + 100 bonus points = 3,700 total points
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  )
}
