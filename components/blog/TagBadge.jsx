import Link from 'next/link'

export default function TagBadge({tag, clickable = true}) {
  const {title, color} = tag

  const tagContent = (
    <span
      className='inline-block items-center whitespace-nowrap rounded-full border-transparent px-2 py-1 text-xs font-semibold tracking-tighter text-dark shadow-md ease-in focus:outline-none'
      style={{
        backgroundColor: color,
        minWidth: 'fit-content',
        maxWidth: '100%',
      }}
    >
      {title}
    </span>
  )

  return clickable ? <Link href={`/blog/tag/${tag.tagSlug}`}>{tagContent}</Link> : tagContent
}
