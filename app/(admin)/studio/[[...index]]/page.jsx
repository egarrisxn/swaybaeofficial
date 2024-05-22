import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}

// import {StudioProvider, StudioLayout} from 'sanity'

// export default function StudioPage() {
//   return (
//     <NextStudio config={config}>
//       <StudioProvider config={config}>
//         {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
//         <StudioLayout />
//       </StudioProvider>
//     </NextStudio>
//   )
// }
