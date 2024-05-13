import Link from 'next/link'
import {socials} from '../../lib/constants'

export default function ContactSocials({mobileStyle}) {
  return (
    <section
      className={`${mobileStyle ? 'mt-12' : ''} rounded-2xl border-2 shadow-md shadow-purple-500/80 ${mobileStyle ? 'py-4' : 'py-8'} px-4 sm:px-8`}
    >
      <h3 className='lobster text-center text-3xl text-primary lg:text-4xl'>Let&apos;s Connect!</h3>
      <hr className='my-4 w-full border-secondary' />
      {mobileStyle ? (
        <div className='flex justify-center space-x-4'>
          {socials.map((icon, idx) => (
            <Link
              key={idx}
              href={icon.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center transition duration-200 ease-in hover:text-primary'
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      ) : (
        <div className='mb-3 grid grid-cols-2 gap-4 text-sm md:text-base lg:text-lg'>
          {socials.map((icon, idx) => (
            <div key={idx} className='flex items-center'>
              <Link
                href={icon.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-secondary'
              >
                {icon.icon}
                <span className='ml-2 text-dark transition duration-200 ease-in hover:text-primary dark:text-light'>
                  {icon.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
      <hr className='my-4 w-full border-secondary' />
      <p className='flex flex-col items-center text-center text-sm sm:text-lg'>
        If you&#39;d prefer, you may directly email me here:
        <br />
        <span className='leading-5 text-primary transition duration-200 ease-in hover:text-secondary sm:text-lg'>
          <Link href='mailto:Sway.Bae9000@gmail.com'>Sway.Bae9000@gmail.com</Link>
        </span>
      </p>
    </section>
  )
}
