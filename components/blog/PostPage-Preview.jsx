'use client'
import {useQuery} from '@sanity/react-loader'
import {POST_QUERY} from '@/utils/sanity/queries.js'
import PostPage from './PostPage.jsx'

export default function PostPagePreview(props) {
  const {params, initial} = props
  const {data} = useQuery(POST_QUERY, params, {initial})

  if (!data) {
    return <div className='text-center'>Loading...</div>
  }

  return <PostPage post={data} />
}
