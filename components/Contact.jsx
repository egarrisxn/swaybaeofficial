'use client'
import {useState} from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        console.log('Failed to send message')
        throw new Error(`response status: ${response.status}`)
      }
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      const responseData = await response.json()
      console.log(responseData['message'])
      alert('Message successfully sent!')
    } catch (err) {
      console.error(err)
      alert('Error, please try again.')
    }
  }

  return (
    <main className='w-full'>
      <label className='sr-only' aria-label='Contact'>
        Contact
      </label>
      <header className='mx-auto w-full'>
        <hr className='border-2 border-purple-800/50' />
        <h1 className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent xl:mt-5 3xl:ml-3 3xl:mt-6 3xl:text-3xl'>
          Contact
        </h1>
      </header>
      {/* ----------Contact Body---------- */}
      <div className='my-16 px-2 sm:px-4 md:px-6 lg:my-24 lg:px-8 xl:px-10 3xl:my-28 3xl:px-16'>
        {/* ----------Contact Form---------- */}
        <section className='mx-auto grid max-w-11xl items-center px-2 sm:grid-cols-2 sm:gap-8 sm:rounded-xl sm:border-2 sm:px-4 sm:py-6 sm:shadow-md sm:shadow-purple-500/80 md:gap-16 lg:p-12 xl:p-16 2xl:p-20 3xl:p-28'>
          {/* ----------Left Side Form---------- */}
          <div className='mb-12 sm:mb-0'>
            <h1 className='sansita text-4xl font-black italic tracking-tight sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-8xl'>
              Let&apos;s Talk
            </h1>
            <p className='mt-3 text-xl leading-5 text-gray-400 sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:mt-6 3xl:text-3xl dark:text-gray-100'>
              Interested in working together? Have a question? Go ahead and send me a message!
            </p>
            <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
              <h2 className='text-lg font-extrabold 3xl:text-3xl'>Email</h2>
              <ul className='mt-3 sm:mt-1 md:mt-2 xl:mt-3 3xl:mt-4'>
                <li className='flex items-center'>
                  <div className='flex size-8 shrink-0 items-center justify-center rounded-full border p-2 md:size-10 3xl:size-12 3xl:p-2.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='size-6 3xl:size-8'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                      />
                    </svg>
                  </div>
                  <a
                    target='_blank'
                    href='mailto:Sway.Bae9000@gmail.com'
                    className='ml-3 text-sm text-[#007bff]'
                  >
                    <p className='block 3xl:text-2xl'>Mail</p>
                    <p className='text-xs 3xl:text-2xl'>Sway.Bae9000@gmail.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-8 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 3xl:mt-10'>
              <h2 className='text-lg font-extrabold 3xl:text-3xl'>Media Kit</h2>
              <ul className='mt-3 sm:mt-1 md:mt-2 xl:mt-3 3xl:mt-4'>
                <li className='flex items-center'>
                  <div className='flex size-8 shrink-0 items-center justify-center rounded-full border p-2 md:size-10 3xl:size-12 3xl:p-2.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='size-6 3xl:size-8'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
                      />
                    </svg>
                  </div>
                  <a
                    target='_blank'
                    href='https://beacons.ai/sway_bae/mediakit'
                    className='ml-3 text-sm text-[#007bff]'
                  >
                    <p className='block 3xl:text-2xl'>Media Kit</p>
                    <p className='text-xs 3xl:text-2xl'>beacons.ai/sway_bae/mediakit</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ----------Right Side Form---------- */}
          <form
            className='ml-auto space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6 3xl:space-y-8'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              minLength={3}
              maxLength={150}
              required
              placeholder='Name'
              className='w-full rounded-md border px-4 py-2.5 text-sm shadow-md shadow-purple-500/80 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
              autoComplete='on'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              minLength={5}
              maxLength={150}
              required
              placeholder='Email'
              className='w-full rounded-md border px-4 py-2.5 text-sm shadow-md shadow-purple-500/80 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
              autoComplete='on'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type='text'
              minLength={3}
              maxLength={150}
              required
              placeholder='Subject'
              className='w-full rounded-md border px-4 py-2.5 text-sm shadow-md shadow-purple-500/80 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
              autoComplete='on'
              name='subject'
              id='subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              type='text'
              rows={3}
              required
              minLength={10}
              maxLength={500}
              placeholder='Message'
              className='w-full rounded-md border px-4 py-2.5 text-sm shadow-md shadow-purple-500/80 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
              name='message'
              id='message'
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='w-full rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

// 'use client'
// import {useState} from 'react'
// import SectionBreak from '@/components/SectionBreak'

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   })

//   const handleInputChange = (event) => {
//     const {name, value} = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   async function handleSubmit(event) {
//     event.preventDefault()
//     const data = new FormData(event.target)
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         body: data,
//       })
//       if (!response.ok) {
//         console.log('Failed to send message')
//         throw new Error(`response status: ${response.status}`)
//       }
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       })
//       const responseData = await response.json()
//       console.log(responseData['message'])
//       alert('Message successfully sent!')
//     } catch (err) {
//       console.error(err)
//       alert('Error, please try again.')
//     }
//   }

//   return (
//     <main className='w-full'>
//       <label className='sr-only'>Contact</label>
//       <SectionBreak text='Contact' />
//       {/* ----------Contact Body---------- */}
//       <div className='my-6'>
//         {/* ----------Contact Form---------- */}
//         {/* <section className='mx-auto max-w-7xl px-4 py-10 lg:px-8'> */}
//         <section className='mx-auto grid max-w-5xl items-center gap-16 rounded-md p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sm:grid-cols-2'>
//           {/* ----------Left Side Form---------- */}
//           <div>
//             <h1 className='text-3xl font-extrabold'>Lets Talk</h1>
//             <p className='mt-3 text-sm text-gray-400'>
//               Have some big idea or brand to develop and need help? Then reach out wed love to hear
//               about your project and provide help.
//             </p>
//             <div className='mt-12'>
//               <h2 className='text-lg font-extrabold'>Email</h2>
//               <ul className='mt-3'>
//                 <li className='flex items-center'>
//                   <div className='flex size-10 p-4 shrink-0 items-center justify-center rounded-full border bg-slate-200'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={2}
//                       stroke='currentColor'
//                       className='h-6 w-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
//                       />
//                     </svg>
//                   </div>
//                   <a
//                     target='blank'
//                     href='mailto:Sway.Bae9000@gmail.com'
//                     className='ml-3 text-sm text-[#007bff]'
//                   >
//                     <p className='block'>Mail</p>
//                     <p className='text-xs'>Sway.Bae9000@gmail.com</p>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className='mt-12'>
//               <h2 className='text-lg font-extrabold'>Media Kit</h2>
//               <ul className='mt-3'>
//                 <li className='flex items-center'>
//                   <div className='flex size-10 p-4 shrink-0 items-center justify-center rounded-full border bg-slate-200'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={2}
//                       stroke='currentColor'
//                       className='h-6 w-6'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
//                       />
//                     </svg>
//                   </div>
//                   <a
//                     target='blank'
//                     href='https://beacons.ai/sway_bae/mediakit'
//                     className='ml-3 text-sm text-[#007bff]'
//                   >
//                     <p className='block'>Media Kit</p>
//                     <p className='text-xs'>beacons.ai/sway_bae/mediakit</p>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* ----------Right Side Form---------- */}
//           <form className='ml-auto space-y-4' onSubmit={handleSubmit}>
//             <input
//               type='text'
//               minLength={3}
//               maxLength={150}
//               required
//               placeholder='Name'
//               // className='rounded-xl border-2 bg-white p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-black dark:text-gray-200 '
//               className='w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]'
//               autoComplete='on'
//               name='name'
//               id='name'
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             <input
//               type='email'
//               minLength={5}
//               maxLength={150}
//               required
//               placeholder='Email'
//               // className='invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded-xl border-2 bg-white p-3 text-gray-500 shadow-md shadow-purple-500/80 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-black dark:text-gray-200'
//               className='w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]'
//               autoComplete='on'
//               name='email'
//               id='email'
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <input
//               type='text'
//               minLength={3}
//               maxLength={150}
//               required
//               placeholder='Subject'
//               // className='rounded-xl border-2 bg-white p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-black dark:text-gray-200 '
//               className='w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]'
//               autoComplete='on'
//               name='subject'
//               id='subject'
//               value={formData.subject}
//               onChange={handleInputChange}
//             />
//             <textarea
//               type='text'
//               rows={3}
//               required
//               minLength={10}
//               maxLength={500}
//               placeholder='Message'
//               // className='w-full rounded-xl border-2 bg-white p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-black dark:text-gray-200 '
//               className='w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]'
//               name='message'
//               id='message'
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//             <button
//               // type='button'
//               type='submit'
//               className='w-full rounded-md bg-[#007bff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600'
//             >
//               Send
//             </button>
//           </form>
//         </section>
//       </div>
//     </main>
//   )
// }
