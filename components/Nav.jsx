// export default function Nav() {
//   return (
//     <div className="w-full container mx-auto">
//       <div className="w-full flex items-center justify-between">
//         <a
//           className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
//           href="#"
//         >
//           Rain
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
//             blur
//           </span>
//         </a>

//         <div className="flex w-1/2 justify-end content-center">
//           <a
//             className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
//             href="https://twitter.com/intent/tweet?url=#"
//           >
//             <svg
//               className="fill-current h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 32 32"
//             >
//               <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
//             </svg>
//           </a>
//           <a
//             className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
//             href="https://www.facebook.com/sharer/sharer.php?u=#"
//           >
//             <svg
//               className="fill-current h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 32 32"
//             >
//               <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import SwapIcon from "./SwapIcon";
import LogoWhite from "../public/images/LogoWhite.png";
import LogoYellow from "../public/images/LogoYellow.png";

export default function Nav() {
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
              <Link href="/aboutme">About Me!</Link>
            </li>
            <li>
              <Link href="/wheretofindme">Where To Find Me</Link>
            </li>
            <li>
              <Link href="/merch">Merch</Link>
            </li>
            <li>
              <Link href="/mediakit">Media Kit</Link>
            </li>
            <li>
              <Link href="/businessinquiries">Business Inquiries</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className=" animate-pulse hidden lg:flex">
          <Link href="/">
            <Image src={LogoWhite} width={80} height={40} alt="Logo White" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 ">
          <li>
            <Link
              href="/aboutme"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent"
            >
              About Me!
            </Link>
          </li>
          <li>
            <Link
              href="/wheretofindme"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Where To Find Me
            </Link>
          </li>
          <li>
            <Link
              href="/merch"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Merch
            </Link>
          </li>
          <li>
            <Link
              href="/mediakit"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Media Kit
            </Link>
          </li>
          <li>
            <Link
              href="/businessinquiries"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
            >
              Business Inquiries
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
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
        <div className="rounded-lg shadow-lg md:rounded-none md:shadow-none">
          <SwapIcon />
        </div>
      </div>
    </navbar>
  );
}
