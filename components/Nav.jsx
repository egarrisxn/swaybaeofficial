import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import SwapIcon from "./SwapIcon";

const Nav = () => {
  return (
    <navbar className="navbar rounded-lg shadow-lg py-2 px-6">
      <div className="navbar-start text-secondary">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost rounded-lg shadow-lg lg:hidden"
          >
            <HamburgerButton />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-lg shadow-lg w-52 text-secondary bg-base-100"
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
        <div className="animate-pulse hidden lg:flex">
          <Link href="/">
            <Image
              src="/images/logowhite.png"
              width={80}
              height={40}
              alt="Swaybae Logo"
              className=""
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
      <div className="animate-pulse flex items-center justify-center lg:hidden">
        <Link href="/">
          <Image
            src="/images/logoyellow.png"
            width={100}
            height={50}
            alt="Swaybae Logo"
            className=""
          />
        </Link>
      </div>
      <div className="navbar-end justify-items-center text-primary ">
        <div className="rounded-lg shadow-lg md:rounded-none md:shadow-none">
          <SwapIcon />
        </div>
      </div>
    </navbar>
  );
};

export default Nav;
