import React from 'react';
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="footer-center flex flex-col-reverse py-4">
        <div className="flex items-center  justify-self-start">
          <p className="bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">
            Copyright © 2023 - All rights reserved
          </p>
        </div>
        <div className="flex items-center gap-4 justify-self-end">
          <a
            href="#!"
            type="button"
            className="m-1 h-8 w-8 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
          >
            <FaTwitch />
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-8 w-8 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
          >
            <FaYoutube />
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-8 w-8 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
          >
            <FaDiscord />
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-8 w-8 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-8 w-8 rounded-full border-secondary border-2 duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
          >
            <FaInstagram />
          </a>
      </div>
    </footer>
  )
}

export default Foot;
