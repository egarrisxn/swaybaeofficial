'use client'
// import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {projectId, dataset, apiVersion, youtubeKey} from './sanity/lib/api'
import {schema} from './sanity/schemas/schema'
import * as resolve from './sanity/lib/resolve'

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
      previewUrl: {previewMode: {enable: '/api/draft', disable: '/api/disable-draft'}},
    }),
    media(),
    // visionTool({defaultApiVersion: apiVersion}),
    youtubeInput({apiKey: youtubeKey}),
  ],
})
