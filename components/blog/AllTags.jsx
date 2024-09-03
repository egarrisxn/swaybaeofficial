import Link from 'next/link'

export default function AllTags({tags}) {
  const allTags = tags.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      const existingTag = acc.find((t) => t._id === tag._id)
      if (existingTag) {
        existingTag.count += 1
      } else {
        acc.push({
          _id: tag._id,
          title: tag.title,
          tagSlug: tag.tagSlug,
          count: 1,
          color: tag.color,
        })
      }
    })
    return acc
  }, [])

  return (
    <>
      {allTags.map((tag) => (
        <div key={tag._id}>
          <div
            style={{backgroundColor: tag.color}}
            className='line-clamp-1 inline-flex items-center rounded-full border-transparent px-2 py-1 text-xs font-semibold tracking-tight text-dark shadow-md ease-in focus:outline-none'
          >
            <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
          </div>
        </div>
      ))}
    </>
  )
}
