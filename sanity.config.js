'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
import {linkField} from 'sanity-plugin-link-field'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {projectId, dataset, youtubeKey} from './sanity/lib/api'
import * as resolve from './sanity/lib/resolve'
import {schema} from './sanity/schemas/schema'

export default defineConfig({
  title: 'Sway Sanity',
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  schema: schema,
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {previewMode: {enable: '/api/draft'}},
    }),
    media(),
    linkField({linkableSchemaTypes: ['post', 'tag']}),
    youtubeInput({apiKey: youtubeKey}),
  ],
})
