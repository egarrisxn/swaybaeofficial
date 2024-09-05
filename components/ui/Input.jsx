export function Input({id, name, type, placeholder, value, onChange}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
      className='border-gray-light dark:bg-background-tint w-full rounded-lg border-2 bg-background px-4 py-2 text-sm outline-none placeholder:text-foreground hover:border-p2b focus:border-p2b sm:px-2 sm:py-1 sm:text-xs md:px-4 md:py-2 md:text-sm xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl'
    />
  )
}
