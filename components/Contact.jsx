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
      const response = await fetch('/api/nodemailer', {
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
      console.log(responseData.message)
      alert('Message successfully sent!')
    } catch (err) {
      console.error(err)
      alert('Error, please try again.')
    }
  }

  return (
    <section className='w-full' aria-labelledby='contact-heading'>
      <header className='mx-auto w-full'>
        <hr className='border-2 border-purple-800/50' />
        <h1
          id='contact-heading'
          className='ml-2 mt-4 bg-gradient-to-tr from-navy via-pink to-pink bg-clip-text text-xl uppercase tracking-widest text-transparent xl:mt-5 3xl:ml-3 3xl:mt-6 3xl:text-3xl'
        >
          Contact
        </h1>
      </header>
      {/* ----------Contact Body---------- */}
      <div className='my-16 px-2 sm:px-4 md:px-6 lg:my-24 lg:px-8 xl:px-10 3xl:my-28 3xl:px-16'>
        {/* ----------Contact Form---------- */}
        <section className='mx-auto grid max-w-11xl items-center px-2 sm:grid-cols-2 sm:gap-8 sm:rounded-xl sm:border-2 sm:px-4 sm:py-6 sm:shadow-md sm:shadow-purple-500/80 md:gap-16 lg:p-12 xl:p-16 2xl:p-20 3xl:p-28'>
          {/* ----------Left Side Form---------- */}
          <div className='mb-12 sm:mb-0'>
            <h2 className='sansita text-4xl font-black italic tracking-tight sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-8xl'>
              Let&apos;s Talk
            </h2>
            <p className='mt-3 text-xl leading-5 text-gray-400 sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:mt-6 3xl:text-3xl dark:text-gray-100'>
              Interested in working together? Have a question? Go ahead and send me a message!
            </p>
            <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
              <h3 className='text-lg font-extrabold 3xl:text-3xl'>Email</h3>
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
              <h3 className='text-lg font-extrabold 3xl:text-3xl'>Media Kit</h3>
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
            aria-labelledby='contact-heading'
          >
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
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
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
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
            <label htmlFor='subject' className='sr-only'>
              Subject
            </label>
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
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
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
              className='w-full rounded-md bg-secondary px-4 py-2.5 text-sm font-bold text-white hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-secondary 2xl:py-4 2xl:text-base 3xl:py-5 3xl:text-lg'
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </section>
  )
}
