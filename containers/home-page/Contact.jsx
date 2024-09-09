'use client'
import {useState, useCallback} from 'react'
import Header from '@/components/Header'
import {Button, buttonVariants} from '@/components/ui/Button'
import {Input} from '@/components/ui/Input'
import {Textarea} from '@/components/ui/Textarea'
import {Icon} from '@/components/ui/Icon'

function SubmitButton() {
  return (
    <Button variant='fun' size='lg' type='submit' className='w-full'>
      Send Message
    </Button>
  )
}

function IconButton({href, children}) {
  return (
    <div className='inline'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonVariants({variant: 'social', size: 'icon'})}
      >
        {children}
      </a>
    </div>
  )
}

function ContactInfo({title, icon, detail, href, ariaLabel}) {
  return (
    <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
      <h3 className='text-lg font-extrabold 3xl:text-3xl'>{title}</h3>
      <ul className='mt-3 sm:mt-1 md:mt-2 xl:mt-3 3xl:mt-4'>
        <li className='flex items-center'>
          <IconButton href={href}>{icon}</IconButton>
          <a target='_blank' href={href} className='ml-2 xl:ml-3' aria-label={ariaLabel}>
            <p className='block text-sm xl:text-base 3xl:text-xl'>{title}</p>
            <p className='text-sm font-semibold text-primary-fade hover:text-primary xl:text-base 2xl:text-lg 3xl:text-xl dark:text-primary-tint dark:hover:text-primary-fade'>
              {detail}
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Contact() {
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
            <h2 className='font-sansita text-5xl font-black italic tracking-tight lg:text-6xl 3xl:text-8xl'>
              Let&apos;s Chat!
            </h2>
            <p className='mt-4 text-xl leading-5 text-gray-fade max-[450px]:text-base sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:mt-6 3xl:text-3xl'>
              Are you interested in working together? Maybe have a question for me? Send over an
              email and I&apos;ll get back with you as soon as possible!
            </p>
            <ContactInfo
              title='Email'
              detail='Sway.Bae9000@gmail.com'
              href='mailto:Sway.Bae9000@gmail.com'
              ariaLabel='Email Sway Bae'
              icon={<Icon.Mail />}
            />
            <ContactInfo
              title='Media Kit'
              detail='beacons.ai/sway_bae/mediakit'
              href='https://beacons.ai/sway_bae/mediakit'
              ariaLabel='View Media Kit'
              icon={<Icon.Files />}
            />
          </div>
          {/* Right Side Form */}
          <form
            className='ml-auto w-full space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6 3xl:space-y-8'
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
            <Textarea
              id='message'
              name='message'
              rows='4'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            />
            <SubmitButton />
          </form>
        </section>
      </div>
    </section>
  )
}
