import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import SwapIcon from "./SwapIcon";
import LogoWhite from "../public/images/LogoWhite.png";
import LogoYellow from "../public/images/LogoYellow.png";

export default function Nav() {
  return (
    <navbar className="">
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
        <ul className="">
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
      <div className="navbar-end">
        <div className="rounded-lg shadow-lg md:rounded-none md:shadow-none">
          <SwapIcon />
        </div>
      </div>
    </navbar>
  );
}

// export default function Nav() {
//   return (
//     <navbar className="navbar rounded-lg shadow-lg py-2 px-6">
//       <div className="navbar-start text-secondary">
//         <div className="dropdown">
//           <label
//             tabIndex={0}
//             className="btn btn-ghost rounded-lg shadow-lg lg:hidden"
//           >
//             <HamburgerButton />
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-lg shadow-lg w-52 text-secondary bg-base-100"
//           >
//             <li>
//               <Link href="/aboutme">About Me!</Link>
//             </li>
//             <li>
//               <Link href="/wheretofindme">Where To Find Me</Link>
//             </li>
//             <li>
//               <Link href="/merch">Merch</Link>
//             </li>
//             <li>
//               <Link href="/mediakit">Media Kit</Link>
//             </li>
//             <li>
//               <Link href="/businessinquiries">Business Inquiries</Link>
//             </li>
//             <li>
//               <Link href="/login">Login</Link>
//             </li>
//           </ul>
//         </div>
//         <div className=" animate-pulse hidden lg:flex">
//           <Link href="/">
//             <Image src={LogoWhite} width={80} height={40} alt="Logo White" />
//           </Link>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal space-x-4 px-1 ">
//           <li>
//             <Link
//               href="/aboutme"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent"
//             >
//               About Me!
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/wheretofindme"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
//             >
//               Where To Find Me
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/merch"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
//             >
//               Merch
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/mediakit"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
//             >
//               Media Kit
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/businessinquiries"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
//             >
//               Business Inquiries
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/login"
//               className="rounded-lg shadow-lg bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent "
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="animate-pulse flex items-center justify-center lg:hidden">
//         <Link href="/">
//           <Image src={LogoYellow} width={100} height={50} alt="Logo Yellow" />
//         </Link>
//       </div>
//       <div className="navbar-end justify-items-center text-primary ">
//         <div className="rounded-lg shadow-lg md:rounded-none md:shadow-none">
//           <SwapIcon />
//         </div>
//       </div>
//     </navbar>
//   );
// }
