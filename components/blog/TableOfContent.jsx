'use client'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function TableOfContent({headings}) {
  const [activeLink] = useState(null)

  useEffect(() => {
    let activeLink = null
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const tocLink = document.querySelector(`.table-of-content-link[href="#${id}"]`)
        if (tocLink && entry.intersectionRatio > 0) {
          if (activeLink) {
            activeLink.classList.remove('active')
          }
          tocLink.classList.add('active')
          activeLink = tocLink
        }
      })
    })
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id]').forEach((header) => {
      observer.observe(header)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className='z-40 mr-4'>
      <label className='sr-only'>Table of Content</label>
      <ol className='table-of-content'>
        {headings.map((heading, idx) => (
          <li key={idx} className='my-2.5 flex h-8 w-full items-center justify-center'>
            <Link href={`#${heading._key}`} className='table-of-content-link text-5xl'>
              <span
                className={`tooltip tooltip-right z-50 hover:text-primary ${activeLink === `.table-of-content-link[href="#${heading._key}"]` ? ' active' : ''}`}
                data-tip={heading.children.map((child) => child.text).join(' ')}
              >
                &bull;
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
