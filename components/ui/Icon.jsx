import {buttonVariants} from './Button'

export function Icon({href, children}) {
  return (
    <div className='inline'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonVariants({variant: 'social', size: 'icon'})}
      >
        {children}
      </a>
    </div>
  )
}
