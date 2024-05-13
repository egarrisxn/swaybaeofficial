import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset} from './api'

const imageBuilder = imageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export function urlFor(source) {
  return imageBuilder.image(source)
}
