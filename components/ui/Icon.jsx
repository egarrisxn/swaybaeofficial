export function Icon({href, className, children}) {
  return (
    <div className='inline hover:animate-bounce'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={` ${className} inline-flex cursor-pointer rounded-full border border-light-tint bg-w2b p-1.5 text-sm font-semibold shadow-soft hover:border-w2b hover:bg-light-tint hover:text-b2w hover:shadow-hard lg:p-2 lg:font-extrabold 2xl:p-2.5 2xl:text-base 3xl:text-2xl dark:border-dark-fade dark:hover:bg-dark-fade`}
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        {children}
      </a>
    </div>
  )
}
