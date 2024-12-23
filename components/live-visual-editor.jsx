'use client'
import {client} from '@/utils/sanity/client'
import {useLiveMode} from '@sanity/react-loader'
import {useEffect} from 'react'
import {VisualEditing} from 'next-sanity'

const stegaClient = client.withConfig({stega: true})

export default function LiveVisualEditing() {
  useLiveMode({client: stegaClient})
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent) {
      location.href = '/api/disable-draft'
    }
  }, [])

  return <VisualEditing />
}
