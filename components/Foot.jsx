import React from 'react';
import { BsDiscord, BsInstagram, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

const Foot = () => {
    return (
        <footer className="footer items-center">

        <div className="flex grid-flow-col bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">
            <p>Copyright © 2023 - All right reserved</p>
        </div> 

        <div className="flex grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
            <a
            href="#!"
            type="button"
            class="m-1 h-9 w-9 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                <BsTwitch />
            </a>
            <a
            href="#!"
            type="button"
            class="m-1 h-9 w-9 rounded-full border-primary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                <BsYoutube />
            </a>
            <a
            href="#!"
            type="button"
            class="m-1 h-9 w-9 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                <BsDiscord />
            </a>
            <a
            href="#!"
            type="button"
            class="m-1 h-9 w-9 rounded-full border-primary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                <BsTwitter />
            </a>
            <a
            href="#!"
            type="button"
            class="m-1 h-9 w-9 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                <BsInstagram />
            </a>
        </div>
        </footer>
    )
}

export default Foot;