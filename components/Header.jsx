import Link from 'next/link'
import {Search} from './ui/Search'

export function Header({
  id,
  className,
  children,
  showHr = false,
  showLink = false,
  linkHref = '',
  linkText = '',
  showSearch = false,
}) {
  return (
    <header
      className={`mx-auto w-full pt-4 md:pt-12 lg:px-4 lg:pt-16 ${
        showSearch ? 'flex flex-row items-center justify-between gap-2' : 'block'
      } ${className} ${showSearch ? 'max-[360px]:flex-col max-[360px]:justify-center' : ''}`}
    >
      {showHr && <hr className='rounded-lg border border-gray-fade' />}

      {showLink && (
        <Link href={linkHref}>
          <h1
            id={id}
            className={`bg-gradient-to-tr from-purple via-pink-tint to-pink-fade bg-clip-text text-xl uppercase tracking-widest text-transparent sm:ml-2 3xl:ml-3 3xl:mt-6 3xl:text-3xl`}
            aria-label={linkText}
          >
            &#8592; {linkText}
          </h1>
        </Link>
      )}

      {!showLink && (
        <h1
          id={id}
          className={`bg-gradient-to-tr from-purple via-pink-tint to-pink-fade bg-clip-text text-xl uppercase tracking-widest text-transparent 3xl:ml-3 3xl:mt-6 3xl:text-3xl`}
        >
          {children}
        </h1>
      )}

      {showSearch && <Search placeholder='Search..' />}
    </header>
  )
}
