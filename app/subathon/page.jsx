import {SubathonHeader} from '@/components/(subathon)/subathon-header'
import {SubathonDetails} from '@/components/(subathon)/subathon-details'
import {PointsProgress} from '@/components/(subathon)/points-progress'
import {PointSystem} from '@/components/(subathon)/point-system'
import {GoalsList} from '@/components/(subathon)/goals-list'
import {Incentives} from '@/components/(subathon)/incentives'

export const metadata = {
  title: 'Subathon Page',
}

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
