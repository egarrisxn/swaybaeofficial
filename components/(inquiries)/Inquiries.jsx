'use client'
import Image from 'next/image'
import Link from 'next/link'
import {PageName} from '@/components/(other)/PageName'
import ContactForm from './ContactForm'
import ContactSocials from './ContactSocials'

export default function Inquiries() {
  return (
    <main className='min-h-screen w-full p-0'>
      <label className='sr-only'>Inquiries</label>
      <div className='mx-auto max-w-7xl px-2 pb-12 pt-4 lg:px-4 lg:pt-16 4xl:max-w-screen-3xl'>
        <PageName>Inquiries</PageName>
        <br />
        <br className='hidden 4xl:block' />
        <div className='mx-auto mb-4 mt-4 flex flex-col justify-center sm:px-2 md:flex-row md:space-x-6 md:px-4 lg:mb-8 lg:mt-16 lg:space-x-10 lg:px-8 xl:space-x-12 xl:px-12 4xl:space-x-16'>
          <section className='rounded-xl md:w-3/5 2xl:w-2/3'>
            <ContactForm />
          </section>
          <section className='hidden md:block md:w-2/5 2xl:w-1/3'>
            <ContactSocials />
            <br />
            <Link
              href='https://beacons.ai/sway_bae/mediakit'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/mediakit.png'
                alt='Media Kit'
                width={600}
                height={350}
                quality={100}
                priority
              />
            </Link>
          </section>
          <section className='md:hidden'>
            <ContactSocials mobileStyle />
          </section>
        </div>
      </div>
    </main>
  )
}
