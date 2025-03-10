import {SubathonHeader} from '@/components/subathon-header'
import {PointsProgress} from '@/components/points-progress'
import {GoalsList} from '@/components/goals-list'
import {Incentives} from '@/components/incentives'
import {TopContributors} from '@/components/top-contributors'

export const metadata = {
  title: 'Subahton',
  description: 'Subathon event page for Swaybae.',
}

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
      <SubathonHeader />
      <PointsProgress />
      <GoalsList />
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-10 2xl:gap-12'>
        <Incentives />
        <TopContributors />
      </div>
    </div>
  )
}
