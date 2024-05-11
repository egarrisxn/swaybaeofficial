import './app/(admin)/studio.css'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {path, id, set, youtubeKey} from '@/sanity/lib/api'
import {schema} from './sanity/schemas/schema'
import {locate} from './sanity/lib/locate'

export default defineConfig({
  name: 'default',
  title: 'Sway Sanity',
  basePath: path || '',
  projectId: id || '',
  dataset: set,
  schema,
  plugins: [
    structureTool(),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
          disable: '/api/disable-draft',
        },
      },
    }),
    media(),
    youtubeInput({apiKey: youtubeKey}),
  ],
})
