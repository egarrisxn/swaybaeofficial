'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Nav = () => {
    return (
        <div className='flex flex-col min-w-full'>
            <Navbar
                fluid
                rounded
            >
                <Navbar.Brand href='https://flowbite-react.com'>
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white px-5'>
                    Swaybae!
                </span>
                </Navbar.Brand>

                <div className='flex md:order-2 px-5'>
                <Dropdown
                    inline
                    label={<Avatar alt='User settings' img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded/>}
                >
                    <Dropdown.Header>
                    <span className='block text-sm'>
                        Ethan Garrison
                    </span>
                    <span className='block truncate text-sm font-medium'>
                        egarrisxn@gmail.com
                    </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                    Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                    Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                    Saved
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                    Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                <Navbar.Link
                    active
                    href='#'
                >
                    <p>
                    Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href='#'>
                    About
                </Navbar.Link>
                <Navbar.Link href='#'>
                    Videos
                </Navbar.Link>
                <Navbar.Link href='#'>
                    Store
                </Navbar.Link>
                <Navbar.Link href='#'>
                    Contact
                </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nav;