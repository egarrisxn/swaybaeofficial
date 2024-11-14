'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function YouTube({vnum}) {
  const [videoData, setVideoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideoData = async () => {
      const playlistId = 'UUbpQhE5NYQ05pSp_DJJQxCA'
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}`

      try {
        const response = await fetch(playlistUrl)
        if (!response.ok) throw new Error('Failed to fetch videos')

        const data = await response.json()

        if (data.items.length === 0) throw new Error('No videos found in playlist')

        const videoItem = data.items[vnum]
        if (videoItem) {
          const videoId = videoItem.snippet.resourceId.videoId
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          setVideoData({videoId, thumbnailUrl})
        } else {
          throw new Error('Video not found')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVideoData()
  }, [vnum]) // Depend on vnum to re-fetch when it changes

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading video: {error}</div>

  return (
    <div className='relative aspect-video rounded-lg'>
      <a
        href={`https://www.youtube.com/watch?v=${videoData.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        <Image
          src={videoData.thumbnailUrl}
          alt='Video Thumbnail'
          className='cursor-pointer rounded-lg'
          width={520}
          height={360}
        />
      </a>

      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50px'
          height='50px'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='text-white'
        >
          <path d='M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z'></path>
        </svg>
      </div>
    </div>
  )
}

// import {Suspense} from 'react'
// import Image from 'next/image'

// // Fetching video data directly on the server side
// async function fetchVideoData(vnum) {
//   const playlistId = 'UUbpQhE5NYQ05pSp_DJJQxCA'
//   const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
//   const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${apiKey}`

//   const response = await fetch(playlistUrl)
//   if (!response.ok) {
//     throw new Error('Failed to fetch videos')
//   }

//   const data = await response.json()

//   if (data.items.length === 0) {
//     throw new Error('No videos found in playlist')
//   }

//   const videoItem = data.items[vnum]
//   if (videoItem) {
//     const videoId = videoItem.snippet.resourceId.videoId
//     const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
//     return {videoId, thumbnailUrl}
//   }

//   throw new Error('Video not found')
// }

// export default async function YouTube({vnum}) {
//   try {
//     const videoData = await fetchVideoData(vnum)

//     return (
//       <div className='aspect-video rounded-lg'>
//         <a
//           href={`https://www.youtube.com/watch?v=${videoData.videoId}`}
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           <Image
//             src={videoData.thumbnailUrl}
//             alt='Video Thumbnail'
//             className='cursor-pointer rounded-lg'
//             width={520}
//             height={360}
//             quality={100}
//           />
//         </a>
//       </div>
//     )
//   } catch (error) {
//     console.error(error)
//     return <div>Error loading video</div>
//   }
// }

// 'use client'
// import {useState, useEffect} from 'react'

// export default function YouTube({vnum}) {
//   const [videoId, setVideoId] = useState('')

//   useEffect(() => {
//     const loadVideo = async () => {
//       const playlistId = 'UUbpQhE5NYQ05pSp_DJJQxCA'
//       const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
//       const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}`

//       try {
//         const response = await fetch(playlistUrl)
//         if (!response.ok) {
//           throw new Error('Failed to fetch videos')
//         }
//         const data = await response.json()
//         if (data.items.length === 0) {
//           throw new Error('No videos found in playlist')
//         }

//         const videoItem = data.items[vnum]
//         if (!videoItem) {
//           throw new Error('Video not found')
//         }

//         const videoId = videoItem.snippet.resourceId.videoId
//         setVideoId(videoId)
//       } catch (error) {
//         console.error('Error loading video:', error)
//       }
//     }

//     loadVideo()
//   }, [vnum])

//   return (
//     <div className='aspect-video rounded-lg'>
//       {videoId && (
//         <iframe
//           title='YouTube Video'
//           src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=0`}
//           allowFullScreen
//           loading='lazy'
//           width='100%'
//           height='100%'
//           allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//           className='rounded-md'
//           aria-label='Embedded YouTube video player'
//         ></iframe>
//       )}
//     </div>
//   )
// }
