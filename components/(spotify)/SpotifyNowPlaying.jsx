'use client'
import {useEffect, useState} from 'react'
import SpotifyLogo from './SpotifyLogo'
import SpotifyAnimation from './SpotifyAnimation'
import getNowPlayingItem from '../../lib/spotify'

export default function SpotifyNowPlaying(props) {
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
        <div className='flex w-44 flex-col items-center gap-1'>
          <div className='flex items-center gap-1'>
            <SpotifyLogo />
            <span className='mr-0.5 font-semibold'>
              {result.isPlaying ? 'Now playing' : 'Currently offline'}
            </span>
            {result.isPlaying && <SpotifyAnimation />}
          </div>
          {result.isPlaying && (
            <div className='flex min-w-40 items-center gap-2 rounded-lg bg-white bg-gradient-to-br p-2 shadow-sm shadow-purple-500/80 dark:from-slate-700 dark:via-slate-900 dark:to-slate-950'>
              <img
                alt={`${result.title} album art`}
                src={result.albumImageUrl}
                className='h-10 w-10 rounded-md'
              />
              <div className='flex max-w-28 flex-col justify-end text-sm'>
                <a
                  href={result.songUrl}
                  target='_blank'
                  className='truncate font-semibold transition-colors duration-200 ease-in hover:text-green-600'
                >
                  {result.title}
                </a>
                <span className='truncate text-gray-700 dark:text-gray-300'>{result.artist}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
