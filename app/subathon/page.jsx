import {SubathonHeader} from '../../components/subathon-header'
import {SubathonDetails} from '../../components/subathon-details'
// import {PointsProgress} from '../../components/points-progress'
import {PointSystem} from '../../components/point-system'
import {GoalsList} from '../../components/goals-list'
import {Incentives} from '../../components/incentives'

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 py-8'>
      <SubathonHeader />
      {/* <PointsProgress currentPoints={0} nextGoalPoints={10000} /> */}
      <SubathonDetails />
      <PointSystem />
      <GoalsList />
      <Incentives />
    </div>
  )
}
