"use client";
import Image from "next/image";
import Link from "next/link";
import SwapIcon from "./SwapIcon";
import React, { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <navbar className="navbar bg-base-300 rounded-lg shadow-lg py-2 px-6">
      <div className="navbar-start text-primary">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost rounded-lg shadow-lg lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-lg shadow-lg w-52 text-secondary bg-base-300"
          >
            <li>
              <a>About Me!</a>
            </li>
            <li>
              <a>Where To Find Me</a>
            </li>
            <li>
              <a>Merch</a>
            </li>
            <li>
              <a>Media Kit</a>
            </li>
            <li>
              <a>Business Inquiries</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Link href="/">
            <Image
              src="/images/Swaybae-1.png"
              width={100}
              height={50}
              alt="Swaybae Logo"
              className="pb-2"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 ">
          <li>
            <a
              href="/aboutme"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent"
            >
              About Me!
            </a>
          </li>
          <li>
            <a
              href="/wheretofindme"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Where To Find Me
            </a>
          </li>
          <li>
            <a
              href="/merch"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Merch
            </a>
          </li>
          <li>
            <a
              href="/mediakit"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Media Kit
            </a>
          </li>
          <li>
            <a
              href="/businessinquiries"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Business Inquiries
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <Link href="/">
          <Image
            src="/images/Swaybae-1.png"
            width={150}
            height={75}
            alt="Swaybae Logo"
            className="pb-1"
          />
        </Link>
      </div>
      <div className="navbar-end justify-items-center text-primary ">
        <div className=" rounded-lg shadow-lg sm:rounded-none sm:shadow-none">
          <SwapIcon />
        </div>
      </div>
    </navbar>
  );
};

export default Nav;
