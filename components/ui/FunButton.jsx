export function FunButton({type = 'button', className, children}) {
  return (
    <button
      type={type}
      className={`${className} relative overflow-hidden rounded-lg border-2 bg-neutral py-2.5 text-sm font-medium shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:rounded-[0.4rem] before:bg-gradient-to-r before:from-b2p-tint before:to-b2p before:transition-transform before:duration-500 before:ease-in-out hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 focus:outline-none focus:ring-2 active:scale-95 2xl:py-3.5 2xl:text-base 3xl:py-5 3xl:text-lg`}
    >
      <span className='relative z-10'>{children}</span>
    </button>
  )
}
