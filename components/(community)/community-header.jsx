import {Users} from 'lucide-react'

export function CommunityHeader() {
  return (
    <div className='mb-12 text-center'>
      <div className='bg-purple-100 dark:bg-purple-900 mb-4 inline-flex items-center justify-center rounded-full p-2'>
        <Users className='text-purple-600 dark:text-purple-400 size-6' />
      </div>
      <h1 className='dark:text-purple-100 text-slate-700 mb-4 text-4xl font-black tracking-tight md:text-5xl'>
        Our Community
      </h1>
      <p className='text-purple-700 dark:text-purple-300 mx-auto max-w-2xl text-lg'>
        Explore our vibrant community of supporters across different tiers
      </p>
    </div>
  )
}
