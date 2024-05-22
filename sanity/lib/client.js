import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion, revalidateSecret} from './api'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
  stega: {
    studioUrl: '/studio',
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    },
  },
})
