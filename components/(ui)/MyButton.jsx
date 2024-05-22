export function MyButton({onClick, children, value, type, disabled}) {
  const content = children || value

  return (
    <>
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className='btn-secondary btn-sm h-10 w-64 rounded-xl bg-gradient-to-r from-lavender to-pink font-semibold text-light shadow-md transition-all duration-200 ease-in hover:text-dark sm:h-12 sm:w-40 sm:rounded-2xl 4xl:h-14 4xl:w-64'
      >
        {content}
      </button>
    </>
  )
}
