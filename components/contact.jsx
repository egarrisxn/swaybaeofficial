'use client'
import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {Icon} from '@/components/ui/icon'
import PageHeader from '@/components/page-header'

function ContactInfo({title, subtitle, icon, detail, href, ariaLabel}) {
  return (
    <div className='mt-4 sm:mt-2 md:mt-4 xl:mt-6 3xl:mt-8'>
      <h3 className='text-lg font-extrabold 3xl:text-3xl'>{title}</h3>
      <ul className='mt-2 sm:mt-1 lg:mt-2 xl:mt-3 3xl:mt-4'>
        <li className='flex items-center gap-2'>
          <Button asChild variant='social' size='icon'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={href}
              aria-label={ariaLabel}
            >
              {icon}
            </a>
          </Button>
          <div>
            <p className='block text-sm text-gray-800 xl:text-base 3xl:text-xl dark:text-gray-300'>
              {subtitle}
            </p>
            <p className='text-sm font-semibold text-primary-fade hover:text-primary xl:text-base 2xl:text-lg 3xl:text-xl dark:text-primary-tint dark:hover:text-primary-fade'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={href}
                aria-label={ariaLabel}
              >
                {detail}
              </a>
            </p>
          </div>
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

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const encodedFormData = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedFormData.toString(),
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
    <section className='w-full'>
      <PageHeader id='contact' showHr={true}>
        Contact
      </PageHeader>
      {/* ----------Contact Body---------- */}
      <div className='my-16 px-2 md:px-4 lg:px-8 xl:my-20 xl:px-16 2xl:px-20 3xl:my-24'>
        <section className='mx-auto grid max-w-11xl items-center md:grid-cols-2 md:gap-2 md:rounded-lg md:border-2 md:bg-white md:px-4 md:py-6 md:shadow-soft lg:gap-16 lg:p-12 xl:p-16 2xl:p-20 3xl:p-28 dark:md:bg-black'>
          <div className='mb-8 sm:mb-4 md:mb-0'>
            {/* Contact Info */}
            <h2 className='font-sansita text-5xl font-black italic tracking-tight lg:text-7xl 3xl:text-8xl'>
              Let&apos;s Chat!
            </h2>
            <p className='mt-4 pr-2 text-base leading-5 text-gray-800 xl:text-xl 2xl:text-2xl 3xl:mt-6 3xl:text-3xl dark:text-gray-300'>
              Are you interested in working together? Maybe have a question for
              me? Send over an email and I&apos;ll get back with you as soon as
              possible!
            </p>
            <ContactInfo
              title='Email'
              subtitle='Email'
              detail='Sway.Bae9000@gmail.com'
              href='mailto:Sway.Bae9000@gmail.com'
              ariaLabel='Email Sway Bae'
              icon={<Icon.Mail />}
            />
            <ContactInfo
              title='Media Kit'
              subtitle='Media Kit'
              detail='beacons.ai/sway_bae/mediakit'
              href='https://beacons.ai/sway_bae/mediakit'
              ariaLabel='View Media Kit'
              icon={<Icon.Files />}
            />
          </div>
          {/* Form */}
          <form
            className='ml-auto w-full space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6 3xl:space-y-8'
            onSubmit={handleSubmit}
          >
            <label htmlFor='name' className='sr-only'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              autoComplete='on'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full rounded-md border border-dark-fade bg-light-fade px-3 py-2 text-gray-tint shadow ring-offset-background file:flex file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl'
              required
            />
            <label htmlFor='email' className='sr-only'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              autoComplete='on'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full rounded-md border border-dark-fade bg-light-fade px-3 py-2 text-gray-tint shadow ring-offset-background file:flex file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl'
              required
            />

            <label htmlFor='subject' className='sr-only'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Subject'
              autoComplete='on'
              value={formData.subject}
              onChange={handleInputChange}
              className='w-full rounded-md border border-dark-fade bg-light-fade px-3 py-2 text-gray-tint shadow ring-offset-background file:flex file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:px-5 xl:py-3 xl:text-base 3xl:px-8 3xl:py-4 3xl:text-2xl'
              required
            />
            <label htmlFor='message' className='sr-only'>
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
              className='flex min-h-[80px] w-full rounded-md border border-dark-fade bg-light-fade px-3 py-2 text-gray-tint shadow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:text-base 3xl:text-2xl'
              required
            />
            <button
              className='relative h-10 w-full overflow-hidden rounded-lg border-2 bg-light-fade shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:bg-gradient-to-r before:from-primary-tint before:to-primary-fade before:duration-500 hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 active:scale-100 xl:h-12 2xl:text-base 3xl:h-14 3xl:text-lg dark:bg-dark-fade'
              type='submit'
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </section>
  )
}
