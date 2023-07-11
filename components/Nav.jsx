import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import SwapIcon from "./SwapIcon";
import LogoWhite from "../public/images/LogoWhite.png";
import LogoYellow from "../public/images/LogoYellow.png";

export default function Nav() {
  return (
    <nav className="navbar rounded-xl shadow-xl py-2 px-6 ">
      <div className="navbar-start text-secondary">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost rounded-xl shadow-xl lg:hidden"
          >
            <HamburgerButton />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-xl shadow-xl w-52 text-secondary bg-base-100"
          >
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/findme">Where To Find Me</Link>
            </li>
            <li>
              <Link href="/merch">Merch</Link>
            </li>
            <li>
              <Link href="/mediakit">Media Kit</Link>
            </li>
            <li>
              <Link href="/inquire">Business Inquiries</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className=" animate-pulse hidden lg:flex">
          <Link href="/">
            <Image
              src={LogoWhite}
              width={80}
              height={40}
              alt="Logo White"
              priority
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 ">
          <li>
            <Link
              href="/aboutme"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent"
            >
              About Me!
            </Link>
          </li>
          <li>
            <Link
              href="/findme"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Where To Find Me
            </Link>
          </li>
          <li>
            <Link
              href="/merch"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Merch
            </Link>
          </li>
          <li>
            <Link
              href="/mediakit"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Media Kit
            </Link>
          </li>
          <li>
            <Link
              href="/inquire"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Business Inquiries
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="rounded-xl shadow-xl bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="animate-pulse flex items-center justify-center lg:hidden">
        <Link href="/">
          <Image src={LogoYellow} width={100} height={50} alt="Logo Yellow" />
        </Link>
      </div>
      <div className="navbar-end justify-items-center text-primary ">
        <div className="rounded-xl shadow-xl md:rounded-none md:shadow-none">
          <SwapIcon />
        </div>
      </div>
    </nav>
  );
}
