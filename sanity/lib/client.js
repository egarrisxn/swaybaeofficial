import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './api'

function encodeSourceMapAtPath(props) {
  if (props.sourcePath.at(-1) === 'url') {
    return false
  }
  return props.filterDefault(props)
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    enabled: process.env.VERCEL_ENV === 'preview',
    studioUrl: '/studio',
    filter: encodeSourceMapAtPath,
    logger: console,
  },
})
