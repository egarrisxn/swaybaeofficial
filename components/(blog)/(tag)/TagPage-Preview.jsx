'use client'
import {TAG_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import TagPage from './TagPage'

export default function TagPagePreview(props) {
  const {params, initial} = props
  const {data} = useQuery(TAG_QUERY, params, {initial})

  if (!data) {
    return <div className='text-center'>Loading...</div>
  }

  return <TagPage tag={data} />
}
