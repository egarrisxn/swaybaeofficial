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
      className='border-gray-light focus:border-3 placeholder:text-gray-light w-full rounded-lg border bg-background px-4 py-2 shadow outline-none hover:border-p2b focus:border-b2w sm:border-2 sm:px-2 sm:py-1 sm:text-sm md:px-4 md:py-2 xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl'
    />
  )
}
