import {Card} from './ui/card'
import {Table, TableBody, TableCell, TableRow} from './ui/table'

export function TopContributors() {
  return (
    <Card className='space-y-6 bg-gradient-to-tr from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Top Contributors</h2>
      <Table className='text-sm tracking-tight md:text-base xl:text-lg 2xl:text-xl'>
        <TableBody>
          <TableRow>
            <TableCell className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold tracking-normal text-transparent'>
              Current Leaderboard
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className='pr-1 font-semibold text-purple-600 dark:text-pink-400'>1.</span>{' '}
              eg__xo <span className='text-sm font-semibold lg:text-base'>(4,355,178 points)</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className='pr-1 font-semibold text-purple-600 dark:text-pink-400'>2.</span>{' '}
              sinkDB_ <span className='text-sm font-semibold lg:text-base'>(3,340,114 points)</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className='pr-1 font-semibold text-purple-600 dark:text-pink-400'>3.</span>{' '}
              MoMoRetta{' '}
              <span className='text-sm font-semibold lg:text-base'>(2,005,698 points)</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className='pr-1 font-semibold text-purple-600 dark:text-pink-400'>4.</span>{' '}
              tatsumasa{' '}
              <span className='text-sm font-semibold lg:text-base'>(1,995,998 points)</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className='pr-1 font-semibold text-purple-600 dark:text-pink-400'>5.</span>{' '}
              Alpha_PT_ <span className='text-sm font-semibold lg:text-base'>(997,051 points)</span>{' '}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr />
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>Top Contributors</h2>
      <ol className='list-outside list-decimal space-y-4 px-6 pb-4 text-slate-700 marker:text-purple-600 lg:text-lg xl:space-y-6 xl:pl-8 xl:pr-12 2xl:text-xl dark:text-slate-200 dark:marker:text-pink-400'>
        <li>
          eg__xo <span className='text-sm font-semibold lg:text-base'>(4,355,178 points)</span>
        </li>
        <li>
          sinkDB_ <span className='text-sm font-semibold lg:text-base'>(3,340,114 points)</span>
        </li>
        <li>
          MoMoRetta <span className='text-sm font-semibold lg:text-base'>(2,005,698 points)</span>
        </li>
        <li>
          tatsumasa <span className='text-sm font-semibold lg:text-base'>(1,995,998 points)</span>
        </li>
        <li>
          Alpha_PT_ <span className='text-sm font-semibold lg:text-base'>(997,051 points)</span>
        </li>
      </ol>
    </Card>
  )
}
