import {socialData} from '@/utils/constants'

export function Footer() {
  return (
    <footer className='w-full'>
      <hr className='border border-purple-800/50' />
      <section className='my-6 flex items-center justify-center max-[300px]:max-w-60 lg:my-8 xl:my-10 3xl:my-12'>
        <p className='hidden text-lg font-medium md:block md:pr-2 xl:text-xl'>Socials: </p>
        <div className='flex flex-wrap content-center gap-2 3xl:gap-4'>
          {socialData.map((icon, idx) => (
            <div key={idx}>
              <a
                href={icon.href}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex rounded-full border-transparent bg-light p-2 font-extrabold text-primary shadow-md transition-all duration-200 ease-in hover:bg-light focus:outline-none 3xl:p-4 dark:bg-slate-800 dark:hover:bg-slate-900'
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                }}
              >
                {icon.icon}
              </a>
            </div>
          ))}
        </div>
      </section>
      <hr className='border border-purple-800/50' />
      <section className='my-4 flex items-center justify-center text-sm max-[300px]:p-0 sm:text-base sm:font-medium md:text-lg lg:my-5 xl:my-6 xl:text-xl 3xl:my-8 3xl:text-2xl'>
        <div className='x'>&copy; 2024</div>
        <div className='mx-1 bg-gradient-to-tr from-secondary via-secondary to-primary bg-clip-text px-1 font-bold text-transparent max-[300px]:mx-0'>
          | Sway Bae |
        </div>
        <div className='x'>All rights reserved</div>
      </section>
    </footer>
  )
}
