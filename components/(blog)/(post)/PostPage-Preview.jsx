'use client'
import {POST_QUERY} from '@/sanity/lib/queries'
import {useQuery} from '@sanity/react-loader'
import PostPage from './PostPage'

export default function PostPagePreview(props) {
  const {params, initial} = props
  const {data} = useQuery(POST_QUERY, params, {initial})

  if (!data) {
    return <div className='text-center'>Loading...</div>
  }

  return <PostPage post={data} />
}
