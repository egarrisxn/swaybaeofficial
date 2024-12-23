import {SubathonHeader} from '../../components/SubathonHeader'
import {SubathonDetails} from '../../components/SubathonDetails'
import {PointsProgress} from '../../components/PointsProgress'
import {PointSystem} from '../../components/PointSystem'
import {GoalsList} from '../../components/GoalsList'
import {Incentives} from '../../components/Incentives'

export default function SubathonPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 py-8'>
      <SubathonHeader />
      <PointsProgress currentPoints={0} nextGoalPoints={10000} />
      <SubathonDetails />
      <PointSystem />
      <GoalsList />
      <Incentives />
    </div>
  )
}
