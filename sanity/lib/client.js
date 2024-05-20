import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './api'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl: '/studio',
  },
})
