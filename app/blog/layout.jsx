export default function BlogLayout({children}) {
  return (
    <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
      <div className='w-full px-4 3xl:px-20 4xl:px-40'>{children}</div>
    </main>
  )
}

// import {draftMode} from 'next/headers'
// import LiveVisualEditing from '@/components/LiveVisualEditing'

// export default function BlogLayout({children}) {
//   return (
//     <>
//       <main className='mx-auto mt-8 w-full sm:container sm:mt-0'>
//         <div className='w-full px-4 3xl:px-20 4xl:px-40'>{children}</div>
//       </main>
//       {draftMode().isEnabled && <LiveVisualEditing />}
//     </>
//   )
// }
