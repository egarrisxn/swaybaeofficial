export function ContactInfo({title, detail, href, ariaLabel, iconPath}) {
  return (
    <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
      <h3 className='text-lg font-extrabold 3xl:text-3xl'>{title}</h3>
      <ul className='mt-3 sm:mt-1 md:mt-2 xl:mt-3 3xl:mt-4'>
        <li className='flex items-center'>
          <div className='flex size-8 shrink-0 items-center justify-center rounded-full border-2 p-2 md:size-10 3xl:size-12 3xl:p-2.5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-6 3xl:size-8'
              aria-hidden='true'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d={iconPath} />
            </svg>
          </div>
          <a target='_blank' href={href} className='ml-2 xl:ml-3' aria-label={ariaLabel}>
            <p className='block xl:text-lg 3xl:text-2xl'>{title}</p>
            <p className='text-sm font-semibold text-primary-tint hover:text-primary-fade xl:text-base 2xl:text-lg 3xl:text-xl'>
              {detail}
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
