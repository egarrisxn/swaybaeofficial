'use client'
import {useState, useEffect} from 'react'

export default function VideoPlayer({vnum}) {
  const [videoId, setVideoId] = useState()

  useEffect(() => {
    const loadVideo = async () => {
      const channelId = 'UCbpQhE5NYQ05pSp_DJJQxCA'
      const apiKey = 'AIzaSyDhSneTeA9ExL4NUPhNidyFqoaWxFiGgAY'
      const playlistId = 'UUbpQhE5NYQ05pSp_DJJQxCA'
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${vnum + 1}&playlistId=${playlistId}&key=${apiKey}`

      try {
        const response = await fetch(playlistUrl)
        const data = await response.json()
        const videoItem = data.items[vnum]
        const videoId = videoItem.snippet.resourceId.videoId
        setVideoId(videoId)
      } catch (error) {
        console.error('Error loading video:', error)
      }
    }
    loadVideo()
  }, [vnum])

  return (
    <div className='aspect-h-9 aspect-w-16 rounded-lg'>
      <label className='sr-only' aria-label='YouTube'>
        YouTube
      </label>
      {videoId && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0`}
          allowFullScreen
          loading='lazy'
          width='100%'
          height='100%'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          className='rounded-lg'
        ></iframe>
      )}
    </div>
  )
}

// 'use client'
// import {useState, useEffect} from 'react'

// export default function VideoPlayer({vnum}) {
//   const [videoSrc, setVideoSrc] = useState()

//   useEffect(() => {
//     const loadVideo = async () => {
//       const cid = 'UCbpQhE5NYQ05pSp_DJJQxCA'
//       const channelURL = encodeURIComponent(
//         `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`,
//       )
//       const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
//       try {
//         const response = await fetch(reqURL)
//         const result = await response.json()
//         const link = result.items[vnum].link
//         const id = link.substr(link.indexOf('=') + 1)
//         setVideoSrc(`https://youtube.com/embed/${id}?controls=0&autoplay=1`)
//       } catch (error) {
//         console.log('error', error)
//       }
//     }
//     loadVideo()
//   }, [vnum])

//   return (
//     <div className='aspect-h-9 aspect-w-16 rounded-lg'>
//       <label className='sr-only' aria-label='YouTube'>
//         YouTube
//       </label>
//       <iframe
//         src={videoSrc}
//         allowFullScreen={true}
//         loading='lazy'
//         width='100%'
//         height='100%'
//         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
//         className='rounded-lg'
//       ></iframe>
//     </div>
//   )
// }
