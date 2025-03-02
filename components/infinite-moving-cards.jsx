import Image from 'next/image'

export function InfiniteMovingCards({
  items,
  direction = 'right',
  speed = 'slow',
}) {
  return (
    <div className='w-full overflow-hidden'>
      <div
        className={`flex items-center gap-8 ${direction === 'right' ? 'scroll' : ''}`}
      >
        {items.map((item, idx) => (
          <div key={idx} className='flex-shrink-0'>
            <Image src={item.src} alt={item.alt} height={200} width={200} />
          </div>
        ))}
      </div>
    </div>
  )
}
