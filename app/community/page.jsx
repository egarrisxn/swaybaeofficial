import {CommunityHeader} from '@/components/(community)/community-header'
import TierList from '@/components/(community)/tier-list'

export default function CommunityPage() {
  return (
    <div className='container mx-auto my-12 max-w-7xl space-y-12 px-4 py-8'>
      <CommunityHeader />
      <TierList />
    </div>
  )
}
