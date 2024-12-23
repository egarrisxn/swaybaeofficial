import {Users} from 'lucide-react'

export function CommunityHeader() {
  return (
    <div className='mb-12 text-center'>
      <div className='mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 p-2 dark:bg-purple-900'>
        <Users className='size-6 text-purple-600 dark:text-purple-400' />
      </div>
      <h1 className='mb-4 text-4xl font-black tracking-tight text-slate-700 md:text-5xl dark:text-purple-100'>
        Our Community
      </h1>
      <p className='mx-auto max-w-2xl text-lg text-purple-700 dark:text-purple-300'>
        Explore our vibrant community of supporters across different tiers
      </p>
    </div>
  )
}
