import Link from 'next/link'
import Image from 'next/image'
import {Tooltipper} from './Tooltipper'

export default function Logo() {
  return (
    <>
      <Tooltipper text='Home Page'>
        <Link href='/' aria-label='Home'>
          <div className='flex items-center'>
            <Image
              src='/avatar.png'
              alt='Logo'
              height={64}
              width={64}
              className='size-10 xl:size-12 3xl:size-14 4xl:size-16'
            />

            <div className='ml-1 bg-gradient-to-tr from-secondary-tint via-secondary to-primary-tint bg-clip-text text-sm font-bold text-transparent xl:ml-1.5 xl:text-lg 3xl:text-2xl'>
              <p className='leading-tight tracking-tight'>Creator</p>
              <p className='leading-tight tracking-tight'>of Chaos</p>
            </div>
          </div>
        </Link>
      </Tooltipper>
    </>
  )
}
