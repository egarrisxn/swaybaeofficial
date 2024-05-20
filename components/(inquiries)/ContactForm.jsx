'use client'
import {useState} from 'react'
import MyButton from '@/components/(ui)/MyButton'

export default function ContactForm() {
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
    const data = new FormData(event.target)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
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
    <form
      className='p-2 sm:shadow-md sm:shadow-purple-500/80 md:rounded-xl md:border-2 md:p-4 md:px-10 lg:rounded-2xl lg:px-12 lg:pt-8 xl:px-16 xl:pt-12 2xl:px-20 4xl:px-28 4xl:pb-8 4xl:pt-16'
      onSubmit={handleSubmit}
    >
      <div className='lobster mb-4 mt-4 text-5xl text-primary lg:mt-2 lg:text-6xl xl:mt-0 4xl:mb-8 4xl:text-7xl'>
        Contact Me
      </div>
      <hr className='hr-lines my-2 border-secondary' />
      <br className='hidden 4xl:block' />
      <div className='my-4 flex w-full flex-col 4xl:mb-8 4xl:mt-4'>
        <label className='font-bold' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          minLength={3}
          maxLength={150}
          required
          placeholder='Name'
          className='rounded-xl border-2 bg-light p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-dark dark:text-gray-200 '
          autoComplete='on'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className='my-4 flex w-full flex-col 4xl:my-8'>
        <label className='font-bold' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          minLength={5}
          maxLength={150}
          required
          placeholder='Email'
          className='invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded-xl border-2 bg-light p-3 text-gray-500 shadow-md shadow-purple-500/80 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:bg-dark dark:text-gray-200'
          autoComplete='on'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className='my-4 flex w-full flex-col 4xl:my-8'>
        <label className='font-bold' htmlFor='subject'>
          Subject
        </label>
        <input
          type='text'
          minLength={3}
          maxLength={150}
          required
          placeholder='Subject'
          className='rounded-xl border-2 bg-light p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-dark dark:text-gray-200 '
          autoComplete='on'
          name='subject'
          id='subject'
          value={formData.subject}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className='font-bold ' htmlFor='message'>
          Message
        </label>
        <textarea
          type='text'
          rows={3}
          required
          minLength={10}
          maxLength={500}
          placeholder='Message'
          className='w-full rounded-xl border-2 bg-light p-3 text-gray-500 shadow-md shadow-purple-500/80 dark:bg-dark dark:text-gray-200 '
          name='message'
          id='message'
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <br className='hidden 4xl:block' />
      <hr className='my-4 border-secondary lg:my-6 4xl:mb-10' />
      <div className='my-6 flex justify-center'>
        <MyButton type='submit' value={'Send Message'} />
      </div>
    </form>
  )
}
