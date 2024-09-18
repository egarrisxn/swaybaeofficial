'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import getNowPlayingItem from '@/utils/spotify'

export function Spotify(props) {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlayingItem = await getNowPlayingItem(
          props.client_id,
          props.client_secret,
          props.refresh_token,
        )
        setResult(nowPlayingItem)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching now playing item:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [props.client_id, props.client_secret, props.refresh_token])

  return (
    <div>
      {loading ? (
        <div className='flex items-center justify-center'>Loading..</div>
      ) : (
        <div className='flex w-44 flex-col items-center'>
          <div className='flex items-center gap-1'>
            <svg className='size-5 text-green' view2box='0 0 20 20'>
              <g>
                <g>
                  <g>
                    <path
                      fill='currentColor'
                      d='M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M14.6,14.4 c-0.2,0.3-0.6,0.4-0.9,0.2c-2.3-1.4-5.3-1.8-8.8-1c-0.3,0.1-0.7-0.1-0.7-0.5c-0.1-0.3,0.1-0.7,0.5-0.7c3.8-0.9,7.1-0.5,9.7,1.1 C14.7,13.7,14.8,14.1,14.6,14.4z M15.8,11.7c-0.2,0.4-0.7,0.5-1.1,0.3C12,10.3,8,9.8,4.8,10.8c-0.4,0.1-0.8-0.1-1-0.5 c-0.1-0.4,0.1-0.8,0.5-1c3.6-1.1,8.1-0.6,11.2,1.3C15.9,10.9,16,11.3,15.8,11.7z M15.9,8.9C12.7,7,7.4,6.8,4.3,7.7 c-0.5,0.1-1-0.1-1.2-0.6C3,6.6,3.3,6.1,3.8,5.9c3.5-1.1,9.4-0.9,13.1,1.3c0.4,0.3,0.6,0.8,0.3,1.3C16.9,9,16.4,9.1,15.9,8.9z'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className='mr-0.5 font-semibold lg:text-lg'>
              {result.isPlaying ? 'Now playing' : 'Currently offline'}
            </span>
            {result.isPlaying && (
              <div className='flex w-auto items-end overflow-hidden'>
                <span className='mr-[1px] h-3 w-1 animate-pulse bg-green opacity-80' />
                <span className='mx-[1px] h-4 w-1 animate-pulse bg-green-tint' />
                <span className='ml-[1px] h-2 w-1 animate-pulse bg-green-fade opacity-75' />
              </div>
            )}
          </div>
          {result.isPlaying && (
            <div className='flex min-w-44 items-center gap-2 rounded-lg border-2 border-white bg-gradient-to-br from-gray-tint via-light-tint to-light-fade p-2 shadow-soft hover:shadow-hard'>
              <Image
                alt={`${result.title} album art`}
                src={result.albumImageUrl}
                className='size-11 rounded-md'
                width={44}
                height={44}
              />
              <div className='mb-1 flex max-w-28 flex-col justify-end'>
                <a
                  href={result.songUrl}
                  target='_blank'
                  className='truncate font-bold text-black hover:text-green-tint'
                >
                  {result.title}
                </a>
                <span className='truncate text-black'>{result.artist}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
