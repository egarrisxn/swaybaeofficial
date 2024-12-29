import {SubathonHeader} from '@/components/subathon-header'
import {PointsProgress} from '@/components/points-progress'
import {SubathonDetails} from '@/components/subathon-details'
import {PointSystem} from '@/components/point-system'
import {GoalsList} from '@/components/goals-list'
import {Incentives} from '@/components/incentives'
// import {TopContributors} from '@/components/top-contributors'

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
      <SubathonHeader />
      <PointsProgress currentPoints={423595} nextGoalPoints={450000} />
      <SubathonDetails />
      <PointSystem />
      <GoalsList />
      <Incentives />
      {/* <TopContributors /> */}
    </div>
  )
}
