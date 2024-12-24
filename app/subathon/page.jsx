import {SubathonHeader} from '../../components/subathon-header'
import {SubathonDetails} from '../../components/subathon-details'
import {PointsProgress} from '../../components/points-progress'
import {PointSystem} from '../../components/point-system'
import {GoalsList} from '../../components/goals-list'
import {Incentives} from '../../components/incentives'

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-2.5 py-8 sm:px-4'>
      <SubathonHeader />
      <PointsProgress currentPoints={94894} nextGoalPoints={100000} />
      <SubathonDetails />
      <PointSystem />
      <GoalsList />
      <Incentives />
    </div>
  )
}
