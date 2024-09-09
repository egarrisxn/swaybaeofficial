'use client'
import {useState, useEffect} from 'react'

export default function YouTube({vnum}) {
  const [videoId, setVideoId] = useState('')

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
      } catch (error) {
        console.error('Error loading video:', error)
      }
    }

    loadVideo()
  }, [vnum])

  return (
    <div className='aspect-video rounded-lg'>
      {videoId && (
        <iframe
          title='YouTube Video'
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0`}
          allowFullScreen
          loading='lazy'
          width='100%'
          height='100%'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          className='rounded-md'
          aria-label='Embedded YouTube video player'
        ></iframe>
      )}
    </div>
  )
}
