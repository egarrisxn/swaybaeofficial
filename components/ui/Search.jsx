'use client'
import Link from 'next/link'
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {useState, useEffect} from 'react'
import {useDebouncedCallback} from 'use-debounce'
import {SEARCH_QUERY} from '@/utils/sanity/queries'
import {client} from '@/utils/sanity/client'
import {Search as SearchIcon} from 'lucide-react'

export function Search({placeholder}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = useDebouncedCallback(async (term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)

    console.log('Fetching search results...')
    if (term) {
      try {
        console.log('Search term:', term)
        const response = await client.fetch(SEARCH_QUERY, {term})
        setSearchResults(response)
        console.log('Search results:', response)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    } else {
      setSearchResults([])
    }
  }, 300)

  useEffect(() => {
    function handleClickOutside(event) {
      if (!document.getElementById('search').contains(event.target)) {
        setSearchResults([])
      }
    }

    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleChange = (e) => {
    const {value} = e.target
    console.log('Input value:', value)
    console.log('Input length:', value.length)
    setSearchTerm(value)
    if (value.length >= 3) {
      handleSearch(value)
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className='relative'>
      <div className='border-gray-light focus:border-3 flex items-center space-x-2 rounded-md border-2 bg-background p-2 shadow'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          id='search'
          className='w-40 appearance-none bg-background outline-none placeholder:text-gray sm:w-auto'
          placeholder={placeholder}
          onChange={handleChange}
          value={searchTerm}
        />

        <SearchIcon size={16} strokeWidth={2} className='text-foreground' />
      </div>
      {searchResults.length > 0 && (
        <div className='=tracking-tight absolute left-0 top-full z-30 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-background pb-1 text-sm shadow 2xl:text-base'>
          <p className='rounded-t bg-[#000000] bg-opacity-80 text-center font-semibold text-w2b dark:bg-[#ffffff]'>
            Search Results
          </p>
          <hr />
          {searchResults.map((result) => (
            <div
              key={result._id}
              className='inline-flex w-full justify-start transition ease-in-out'
            >
              <span className='pl-0.5 pt-[0.35rem] font-medium text-primary'>&#x2022;</span>
              <Link
                href={`/blog/post/${result.slug.current}`}
                className='my-1 ml-0.5 mr-2.5 w-full border-b pb-1.5 pt-0.5 hover:border-foreground hover:text-secondary'
              >
                {result.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
