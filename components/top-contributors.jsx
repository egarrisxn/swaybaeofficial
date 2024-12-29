import {Card} from './ui/card'

export function TopContributors() {
  return (
    <Card className='space-y-6 bg-gradient-to-tr from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
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
        <li>
          xya-three <span className='text-sm font-semibold lg:text-base'>(997,040 points)</span>
        </li>
        <li>
          egocentric123 <span className='text-sm font-semibold lg:text-base'>(997,022 points)</span>
        </li>
        <li>
          xoxo1 <span className='text-sm font-semibold lg:text-base'>(997,011 points)</span>
        </li>
        <li>
          eatmyshorts <span className='text-sm font-semibold lg:text-base'>(997,010 points)</span>
        </li>
        <li>
          2rfS525 <span className='text-sm font-semibold lg:text-base'>(997,001 points)</span>
        </li>
      </ol>
    </Card>
  )
}
