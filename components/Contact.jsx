'use client'
import {useState, useCallback} from 'react'
import {Header} from './Header'
import {TextArea} from './ui/TextArea'
import {Input} from './ui/Input'
import {ContactInfo} from './ui/ContactInfo'
import {Button} from './ui/Button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = useCallback((event) => {
    const {name, value} = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }, [])

  const handleSubmit = async (event) => {
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
        throw new Error(`Response status: ${response.status}`)
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
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Error, please try again.')
    }
  }

  return (
    <section className='w-full'>
      <Header id='contact' showHr={true}>
        Contact
      </Header>
      {/* ----------Contact Body---------- */}
      <div className='mb-16 mt-12 px-2 sm:mt-16 sm:px-4 md:px-6 lg:my-24 lg:px-8 xl:px-10 3xl:my-28 3xl:px-16'>
        <section className='mx-auto grid max-w-11xl items-center sm:grid-cols-2 sm:gap-2 sm:rounded-lg sm:border-2 sm:bg-w2b sm:px-4 sm:py-6 sm:shadow-hard md:gap-16 lg:p-12 xl:p-16 2xl:p-20 3xl:p-28'>
          {/* Left Side */}
          <div className='mb-12 sm:mb-0'>
            <h2 className='font-sansita text-4xl font-black italic tracking-tight md:text-5xl lg:text-6xl 3xl:text-8xl'>
              Let&apos;s Talk
            </h2>
            <p className='mt-2 text-xl leading-5 text-foreground max-[450px]:text-base sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:mt-6 3xl:text-3xl'>
              Interested in working together? Have a question? Go ahead and send me a message!
            </p>
            <ContactInfo
              title='Email'
              detail='Sway.Bae9000@gmail.com'
              href='mailto:Sway.Bae9000@gmail.com'
              ariaLabel='Email Sway Bae'
              iconPath='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
            <ContactInfo
              title='Media Kit'
              detail='beacons.ai/sway_bae/mediakit'
              href='https://beacons.ai/sway_bae/mediakit'
              ariaLabel='View Media Kit'
              iconPath='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
            />
          </div>
          {/* Right Side Form */}
          <form
            className='ml-auto space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6 3xl:space-y-8'
            onSubmit={handleSubmit}
          >
            <Input
              id='name'
              name='name'
              type='text'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              id='subject'
              name='subject'
              type='text'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <TextArea
              id='message'
              name='message'
              rows='4'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button type='submit' className='w-full'>
              Send Message
            </Button>
          </form>
        </section>
      </div>
    </section>
  )
}
