import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {locations} from './sanity/lib/locations'
import {title, basePath, projectId, dataset, apiVersion, youtubeKey} from './sanity/lib/api'
import {schema} from './sanity/schemas/schema'

export default defineConfig({
  title: title,
  basePath: basePath,
  projectId: projectId,
  dataset: dataset,
  schema: schema,
  plugins: [
    structureTool(),
    presentationTool({
      resolve: {
        locations,
      },
      previewUrl: {previewMode: {enable: '/api/draft', disable: '/api/disable-draft'}},
    }),
    media(),
    visionTool({defaultApiVersion: apiVersion}),
    youtubeInput({apiKey: youtubeKey}),
  ],
})
