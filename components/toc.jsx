'use client'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {Tooltip} from './ui/tooltip'

const tocStyle = {
  color: 'var(--b2w)',
}

const tocStyleActive = {
  color: 'var(--primary)',
}

export default function TableOfContent({headings}) {
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    let activeLink = null
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const tocLink = document.querySelector(`a[href='#${id}']`)
        if (tocLink && entry.intersectionRatio > 0) {
          if (activeLink) {
            activeLink.style.color = tocStyle.color
          }
          tocLink.style.color = tocStyleActive.color
          activeLink = tocLink
          setActiveLink(tocLink)
        }
      })
    })
    document
      .querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id]')
      .forEach((header) => {
        observer.observe(header)
      })
    return () => observer.disconnect()
  }, [])

  return (
    <section className='z-20 mr-4'>
      <ol className='table-of-content'>
        {headings.map((heading, idx) => (
          <li
            key={idx}
            className='my-2.5 flex h-8 w-full items-center justify-center'
          >
            <Link
              href={`#${heading._key}`}
              style={tocStyle}
              className={`text-5xl ${activeLink && activeLink.getAttribute('href') === `#${heading._key}` ? 'active' : ''}`}
            >
              <Tooltip
                direction='right'
                text={heading.children.map((child) => child.text).join(' ')}
              >
                <span className='z-20 hover:text-primary'>&bull;</span>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
