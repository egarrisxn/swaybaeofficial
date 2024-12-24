'use client'
import {AlertCircle} from 'lucide-react'
import {Card} from './ui/card'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table'

export function PointSystem() {
  return (
    <Card className='space-y-6 bg-white p-4 shadow backdrop-blur-sm md:p-4 lg:p-6 dark:bg-black'>
      <h3 className='mb-4 pt-4 text-xl font-bold md:text-2xl xl:text-3xl'>Point System</h3>
      <div className='flex flex-col gap-4 md:gap-6'>
        {/* Wrapping the table with a scrollable div */}
        <div className='overflow-x-auto'>
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
                  Additional Points for New Multi-Month Subscriptions
                </TableCell>
                <TableCell colSpan={2} className='italic'>
                  Extra Points for Gifted Subs from Twitch
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className='font-semibold text-[#3eb8ce]'>3 months</TableCell>
                <TableCell className='font-semibold text-[#3eb8ce]'>6 months</TableCell>
                <TableCell className='font-semibold text-[#3eb8ce]'>12 months</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tier 1 Sub</TableCell>
                <TableCell className='font-semibold'>600 points</TableCell>
                <TableCell>+300 points</TableCell>
                <TableCell>+700 points</TableCell>
                <TableCell>+1500 points</TableCell>
                <TableCell className='font-semibold'>+100 points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tier 2 Sub</TableCell>
                <TableCell className='font-semibold'>1000 points</TableCell>
                <TableCell>+600 points</TableCell>
                <TableCell>+1400 points</TableCell>
                <TableCell>+3000 points</TableCell>
                <TableCell className='font-semibold'>+200 points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tier 3 Sub</TableCell>
                <TableCell className='font-semibold'>2500 points</TableCell>
                <TableCell>+1500 points</TableCell>
                <TableCell>+3500 points</TableCell>
                <TableCell>+7500 points</TableCell>
                <TableCell className='font-semibold'>+500 points</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Repeat the same for the second table */}
        <div className='mx-auto flex flex-col justify-center gap-6 md:mt-2 md:flex-row md:gap-12'>
          <div className='order-2 flex flex-col items-center justify-center space-y-3 rounded-lg bg-purple-50 py-12 md:h-fit md:w-1/3 dark:bg-purple-900/20'>
            <h4 className='flex items-center gap-1 font-semibold md:gap-2'>
              <AlertCircle className='size-4 text-purple-600' />
              Current Twitch Promotions
            </h4>
            <ul className='list-inside list-disc space-y-1 text-sm'>
              <li>25% off new 1-month subs</li>
              <li>25% off new 3-month subs</li>
              <li>30% off new 6-month subs</li>
            </ul>
          </div>
          <div className='order-1 space-y-4 md:w-2/3'>
            <Card className='space-y-3 p-3 md:p-4'>
              <h4 className='font-semibold'>Bonus Gift Subs Program</h4>
              <p className='text-muted-foreground text-sm'>
                For every five gift subs purchased for a channel, Valorant will add one bonus gift
                sub. Additional points will be added based on the tier and number of gifted subs
                from Twitch.
              </p>
              <div className='bg-muted rounded-md p-3 text-sm'>
                <strong>Example:</strong> 5 Tier 1 gifted subs (3,000 points) + 1 bonus gifted sub
                (600 points) + 100 bonus points = 3,700 total points
              </div>
              <a
                href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 text-sm text-purple-600 transition-colors hover:text-purple-700'
              >
                Learn more about the End-of-Year Bonus Round
              </a>
            </Card>
          </div>
        </div>
      </div>

      {/* <div className='space-y-3'>
        <div className='w-fit space-y-2 rounded bg-neutral-300/10 px-4 py-2 text-sm dark:bg-neutral-700/40'>
          <p>* Additional points for multi-month subscriptions</p>
          <p>** Extra points for gifted subs from Twitch</p>
        </div>
      </div> */}
    </Card>
  )
}

// 'use client'
// import {AlertCircle} from 'lucide-react'
// import {Card} from './ui/card'
// import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from './ui/table'

// export function PointSystem() {
//   return (
//     <Card className='space-y-6 bg-white p-5 shadow backdrop-blur-sm md:p-6 dark:bg-black'>
//       <h3 className='mb-4 pt-4 text-xl font-bold md:text-2xl xl:text-3xl'>Point System</h3>
//       <div className='grid grid-cols-1 gap-5 md:gap-6'>
//         <div className='space-y-4'>
//           <div>
//             <Table>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>1 bit</TableCell>
//                   <TableCell className='font-semibold'>1 point</TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>$1 tip</TableCell>
//                   <TableCell className='font-semibold'>100 points</TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>Prime Sub</TableCell>
//                   <TableCell className='font-semibold'>400 points</TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell className='font-semibold'>
//                     Additional points for new multi-month subscription
//                   </TableCell>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell className='font-italic'>
//                     Extra Points for Gifted Subs from Twitch
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell></TableCell>
//                   <TableCell></TableCell>
//                   <TableCell>3 months</TableCell>
//                   <TableCell>6 months</TableCell>
//                   <TableCell>12 months</TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>Tier 1 Sub</TableCell>
//                   <TableCell className='font-semibold'>600 points</TableCell>
//                   <TableCell>+300 points</TableCell>
//                   <TableCell>+700 points</TableCell>
//                   <TableCell>+1500 points</TableCell>
//                   <TableCell className='font-semibold'>+100 points</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>Tier 2 Sub</TableCell>
//                   <TableCell className='font-semibold'>1000 points</TableCell>
//                   <TableCell>+600 points</TableCell>
//                   <TableCell>+1400 points</TableCell>
//                   <TableCell>+3000 points</TableCell>
//                   <TableCell className='font-semibold'>+200 points</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>Tier 3 Sub</TableCell>
//                   <TableCell className='text-right font-semibold'>2500 points</TableCell>
//                   <TableCell>+1500 points</TableCell>
//                   <TableCell>+3500 points</TableCell>
//                   <TableCell>+7500 points</TableCell>
//                   <TableCell className='font-semibold'>+500 points</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//   <div className='mx-auto flex flex-col justify-center gap-6 md:flex-row md:gap-12'>
//     <div className='order-2 flex flex-col items-center justify-center space-y-3 rounded-lg bg-purple-50 py-12 md:order-1 md:h-fit md:w-1/3 dark:bg-purple-900/20'>
//       <h4 className='flex items-center gap-1 font-semibold md:gap-2'>
//         <AlertCircle className='size-4 text-purple-600' />
//         Current Twitch Promotions
//       </h4>
//       <ul className='list-inside list-disc space-y-1 text-sm'>
//         <li>25% off new 1-month subs</li>
//         <li>25% off new 3-month subs</li>
//         <li>30% off new 6-month subs</li>
//       </ul>
//     </div>
//     <div className='order-1 space-y-4 md:order-2 md:w-2/3'>
//       <Card className='space-y-3 p-3 md:p-4'>
//         <h4 className='font-semibold'>Bonus Gift Subs Program</h4>
//         <p className='text-muted-foreground text-sm'>
//           For every five gift subs purchased for a channel, Valorant will add one bonus gift
//           sub. Additional points will be added based on the tier and number of gifted subs
//           from Twitch.
//         </p>
//         <div className='bg-muted rounded-md p-3 text-sm'>
//           <strong>Example:</strong> 5 Tier 1 gifted subs (3,000 points) + 1 bonus gifted sub
//           (600 points) + 100 bonus points = 3,700 total points
//         </div>
//         <a
//           href='https://blog.twitch.tv/en/2024/11/21/bonus-round-2024/'
//           target='_blank'
//           rel='noopener noreferrer'
//           className='inline-flex items-center gap-1 text-sm text-purple-600 transition-colors hover:text-purple-700'
//         >
//           Learn more about the End-of-Year Bonus Round
//         </a>
//       </Card>
//     </div>
//   </div>
// </div>

//       <div className='space-y-3'>
//         <h3 className='text-lg font-semibold'>Subscription Points</h3>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Type</TableHead>
//               <TableHead>Base</TableHead>
//               <TableHead>3 Month</TableHead>
//               <TableHead>6 Month</TableHead>
//               <TableHead>12 Month</TableHead>
//               <TableHead>Gift Bonus</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             <TableRow>
//               <TableCell>Tier 1</TableCell>
//               <TableCell>600</TableCell>
//               <TableCell>+300</TableCell>
//               <TableCell>+700</TableCell>
//               <TableCell>+1,500</TableCell>
//               <TableCell>+100</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Tier 2</TableCell>
//               <TableCell>1,000</TableCell>
//               <TableCell>+600</TableCell>
//               <TableCell>+1,400</TableCell>
//               <TableCell>+3,000</TableCell>
//               <TableCell>+200</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>Tier 3</TableCell>
//               <TableCell>2,500</TableCell>
//               <TableCell>+1,500</TableCell>
//               <TableCell>+3,500</TableCell>
//               <TableCell>+7,500</TableCell>
//               <TableCell>+500</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>

//       <div className='text-muted-foreground space-y-2 text-sm'>
//         <p>* Additional points for multi-month subscriptions</p>
//         <p>** Extra points for gifted subs from Twitch</p>
//       </div>
//     </Card>
//   )
// }
