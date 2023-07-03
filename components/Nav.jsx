'use client';
import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className='flex flex-col min-w-full'>
        <Navbar fluid rounded>
            <Navbar.Brand href='/'>
                <Image
                alt='Logo'
                height='32'
                src='https://flowbite.com/docs/images/logo.svg'
                width='32'
                />
            </Navbar.Brand>

            <Button className='flex md:order-2 invisible md:visible' href='/navbars'>
                Get started
            </Button>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href='/navbars' active>About Me</Navbar.Link>
                <Navbar.Link href='/navbars'>Where To Find Me</Navbar.Link>
                <Navbar.Link href='/navbars'>Merchandise</Navbar.Link>
                <Navbar.Link href='/navbars'>Business Inquiries</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}


export default Nav;