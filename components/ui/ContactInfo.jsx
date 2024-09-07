import {Icon} from './Icon'

export function ContactInfo({title, icon, detail, href, ariaLabel}) {
  return (
    <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
      <h3 className='text-lg font-extrabold 3xl:text-3xl'>{title}</h3>
      <ul className='mt-3 sm:mt-1 md:mt-2 xl:mt-3 3xl:mt-4'>
        <li className='flex items-center'>
          <Icon href={href}>{icon}</Icon>
          <a target='_blank' href={href} className='ml-2 xl:ml-3' aria-label={ariaLabel}>
            <p className='block text-sm xl:text-base 3xl:text-xl'>{title}</p>
            <p className='text-sm font-semibold text-primary-fade hover:text-primary xl:text-base 2xl:text-lg 3xl:text-xl dark:text-primary-tint dark:hover:text-primary-fade'>
              {detail}
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
