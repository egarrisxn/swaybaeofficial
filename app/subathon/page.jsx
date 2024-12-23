import {SubathonHeader} from '@/components/(Subathon)/SubathonHeader'
import {SubathonDetails} from '@/components/(Subathon)/SubathonDetails'
import {PointsProgress} from '@/components/(Subathon)/PointsProgress'
import {PointSystem} from '@/components/(Subathon)/PointSystem'
import {GoalsList} from '@/components/(Subathon)/GoalsList'
import {Incentives} from '@/components/(Subathon)/Incentives'

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
