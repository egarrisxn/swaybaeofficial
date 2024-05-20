import Link from 'next/link'
import {socialsData} from '@/lib/constants'

export default function SocialButtons() {
  return (
    <>
      {socialsData.map((icon, idx) => (
        <div key={idx}>
          <Link
            href={icon.href}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex rounded-full border-transparent bg-white p-2 font-extrabold text-primary shadow-md transition-all duration-200 ease-in hover:bg-light focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-900'
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            }}
          >
            {icon.icon}
          </Link>
        </div>
      ))}
    </>
  )
}
