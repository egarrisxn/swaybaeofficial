import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/utils/sanity/generateStaticSlugs'
import {loadPost} from '@/utils/sanity/loadQuery'
import PostPage from '@/containers/post-page/PostPage'

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugPage({params}) {
  const initial = await loadPost(params.slug)

  if (!initial.data) {
    notFound()
  }

  return <PostPage post={initial.data} />
}

// import dynamic from 'next/dynamic'
// import {draftMode} from 'next/headers'
// import {notFound} from 'next/navigation'
// import {generateStaticSlugs} from '@/utils/sanity/generateStaticSlugs'
// import {loadPost} from '@/utils/sanity/loadQuery'
// import PostPage from '@/containers/post-page/PostPage'

// const PostPagePreview = dynamic(() => import('@/containers/post-page/PostPage-Preview.jsx'))

// function loadingPage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Loading...')
//     }, 1000)
//   })
// }

// export function generateStaticParams() {
//   return generateStaticSlugs('post')
// }

// export default async function PostSlugPage({params}) {
//   const load = await loadingPage()
//   console.log({load})

//   const initial = await loadPost(params.slug)

//   if (draftMode().isEnabled) {
//     return <PostPagePreview params={params} initial={initial} />
//   }

//   if (!initial.data) {
//     notFound()
//   }

//   return <PostPage post={initial.data} />
// }
