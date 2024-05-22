import Link from 'next/link'

export function TagFilter({tags}) {
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
    <div className='dropdown dropdown-end dropdown-bottom dropdown-hover'>
      <div
        tabIndex={0}
        role='button'
        className='btn-circle z-30 flex h-10 w-10 items-center justify-center border bg-light p-2 text-center dark:bg-dark'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-6v4m0 4v8m4-4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-12v10m0 4v2m4-13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-3v1m0 4v11'
          ></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-30 mt-1 w-44 rounded-md border bg-light p-2 text-sm font-semibold tracking-tight dark:bg-dark'
      >
        Filter by Tag:
        {allTags.map((tag) => (
          <li key={tag._id}>
            <div
              style={{backgroundColor: tag.color}}
              className='transiton-colors line-clamp-1 inline-flex w-40 items-center justify-start rounded-none border-transparent text-dark duration-200 ease-in hover:text-light'
            >
              <Link href={`/blog/tag/${tag.tagSlug}`}>{tag.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
