export default function LoadButton({onClick}) {
  return (
    <div className='flex justify-center pb-12 pt-4'>
      <button
        type='button'
        className='group relative overflow-hidden rounded-lg bg-light-tint p-3 text-base font-medium leading-tight text-dark-fade shadow-soft hover:shadow-hard dark:bg-light'
        onClick={onClick}
      >
        <div className='absolute inset-0 w-2 bg-dark duration-300 hover:w-full dark:bg-primary'></div>
        <span className='relative hover:text-light'>Load more posts</span>
      </button>
    </div>
  )
}
