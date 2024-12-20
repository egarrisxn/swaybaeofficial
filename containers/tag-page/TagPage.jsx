// import PageHeader from '@/components/PageHeader'
// import TagCard from '@/components/TagCard'

// export default function TagPage({tag}) {
//   if (!tag) return null

//   const {title, posts} = tag

//   return (
//     <>
//       <PageHeader id='tags' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
//       {/* ----------Posts by Tag ---------- */}
//       <div className='mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10 3xl:px-16 4xl:max-w-screen-3xl'>
//         <h3 className='mb-2 ml-1 text-2xl font-bold sm:text-3xl'>
//           <span className='mr-1 text-xl text-primary'>&#9684;</span>
//           {title}
//         </h3>
//         <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
//           {posts.map((post) => (
//             <TagCard key={post._id} post={post} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }
