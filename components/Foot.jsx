'use client';
import { Footer } from 'flowbite-react';
import { BsDiscord, BsTwitch, BsGithub, BsInstagram, BsTwitter, } from "react-icons/bs";

const Foot = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsTwitch} />
            <Footer.Icon href="#" icon={BsDiscord} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Foot;