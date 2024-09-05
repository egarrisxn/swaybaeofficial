export function Button({type = 'button', className, children}) {
  return (
    <button
      type={type}
      className={`${className} button cursor-pointer overflow-hidden rounded-[6px] border-2 py-1.5 text-xs font-semibold shadow-[1px_2px_4px_0px_gray] transition-all duration-300 ease-in-out hover:shadow-[1px_2px_5px_0px_gray] focus:outline-none focus:ring-2 md:py-2.5 md:text-sm 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg dark:shadow-[1px_3px_6px_0px_gray] hover:dark:shadow-[1px_3px_7px_0px_gray]`}
    >
      {children}
    </button>
  )
}
