// // The queryStore instance is shared in RSC and client components, and thus this file must be kept tiny otherwise it will be included in the client bundle. The API meant to be used from RSC components are exported from `./loadQuery.js` and client components should import from `./useQuery.js`.
// import * as queryStore from '@sanity/react-loader'
// import {client} from './client'
// import {token} from './token'

// queryStore.setServerClient(client.withConfig({token}))

// export const {loadQuery} = queryStore
