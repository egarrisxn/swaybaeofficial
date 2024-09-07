'use client'
import {useState, useEffect} from 'react'
import {AspectRatio} from './AspectRatio'
import {Skeleton} from './Skeleton'

export default function YouTube({vnum}) {
  const [videoId, setVideoId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadVideo = async () => {
      const playlistId = 'UUbpQhE5NYQ05pSp_DJJQxCA'
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${playlistId}&key=${apiKey}`

      try {
        const response = await fetch(playlistUrl)
        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }
        const data = await response.json()
        if (data.items.length === 0) {
          throw new Error('No videos found in playlist')
        }

        const videoItem = data.items[vnum]
        if (!videoItem) {
          throw new Error('Video not found')
        }

        const videoId = videoItem.snippet.resourceId.videoId
        setVideoId(videoId)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading video:', error)
        setIsLoading(false)
      }
    }

    loadVideo()
  }, [vnum])

  return (
    <AspectRatio ratio={16 / 9}>
      {isLoading ? (
        <Skeleton className='h-full w-full' />
      ) : (
        <iframe
          title='YouTube Video'
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0`}
          allowFullScreen
          loading='lazy'
          width='100%'
          height='100%'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          className='rounded-lg'
          aria-label='Embedded YouTube video player'
        ></iframe>
      )}
    </AspectRatio>
  )
}
