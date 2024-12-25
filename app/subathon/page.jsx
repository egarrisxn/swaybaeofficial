import {PointsProgress} from '@/components/points-progress'
import {GoalsList} from '@/components/goals-list'
import {Incentives} from '@/components/incentives'
import {SubathonHeader} from '@/components/subathon-header'
import {SubathonDetails} from '@/components/subathon-details'
import {PointSystem} from '@/components/point-system'

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
      {/* //! xxx */}
      <SubathonHeader />
      {/* //! xxx */}
      <PointsProgress currentPoints={123754} nextGoalPoints={150000} />
      {/* //! xxx */}
      <SubathonDetails />
      {/* //! xxx */}
      <PointSystem />
      {/* //! xxx */}
      <GoalsList />
      {/* //! xxx */}
      <Incentives />
    </div>
  )
}
