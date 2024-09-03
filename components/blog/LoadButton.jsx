export default function LoadButton({onClick}) {
  return (
    <div className='flex justify-center pb-12 pt-4'>
      <button
        type='button'
        className='group relative overflow-hidden rounded-lg bg-gray-50 px-3 py-3 text-base font-medium leading-tight text-gray-900 shadow-2xl dark:bg-light dark:shadow-secondary'
        onClick={onClick}
      >
        <div className='absolute inset-0 w-2 bg-dark transition-all duration-300 ease-out hover:w-full dark:bg-primary'></div>
        <span className='relative hover:text-light'>Load more posts</span>
      </button>
    </div>
  )
}
