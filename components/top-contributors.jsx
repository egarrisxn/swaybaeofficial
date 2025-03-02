import {Card} from './ui/card'

const contributors = [
  {name: 'srasosa80', points: 130200},
  {name: 'tatsumasa', points: 73800},
  {name: 'astrotakesgames', points: 57800},
  {name: 'Chuckmate360', points: 57000},
  {name: 'comiclzz', points: 19720},
  {name: 'IteukkaI', points: 18600},
  {name: 'neptune_olympus', points: 18500},
  {name: 'elle_emenopy', points: 18000},
  {name: 'Biscotti', points: 16240},
  {name: 'darthkek69', points: 15700},
  {name: 'prof_faridoon', points: 15000},
  {name: 'darkmek131', points: 13200},
  {name: 'TyLenIPhe', points: 12000},
  {name: 'Dille', points: 12000},
  {name: 'whitewaterinthemornin', points: 10280},
]

export function TopContributors() {
  return (
    <Card className='h-fit w-full space-y-6 bg-gradient-to-bl from-purple-50 to-white p-4 shadow-lg lg:p-6 dark:bg-black dark:from-gray-800'>
      <h2 className='text-lg font-bold md:text-xl xl:text-2xl'>
        Top Contributors
      </h2>
      <ol className='list-outside list-decimal space-y-4 px-6 text-slate-700 marker:text-purple-600 md:text-xl lg:space-y-6 lg:pl-7 xl:pl-8 dark:text-slate-200 dark:marker:text-pink-400'>
        {contributors.map(({name, points}, index) => (
          <li key={index}>
            {name}{' '}
            <span className='text-sm font-semibold md:text-base'>
              ({points.toLocaleString()} points)
            </span>
          </li>
        ))}
      </ol>
    </Card>
  )
}
