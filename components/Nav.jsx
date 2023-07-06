import SwapIcon from "./SwapIcon";

const Nav = () => {
    return (
        <navbar className="navbar">
        <div className="navbar-start text-primary">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>About Me!</a></li>
                <li><a>Where To Find Me</a></li>
                <li><a>Merch</a></li>
                <li><a>Media Package</a></li>
                <li><a>Business Inquiries</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl  bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Sway!</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4 px-1">
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">About Me!</a></li>
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Where To Find Me</a></li>
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Merch</a></li>
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Media Package</a></li>
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Business Inquiries</a></li>
                <li><a className=" bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">Login / Signup</a></li>
            </ul>
        </div>
        <div className="navbar-end text-primary">
            <SwapIcon />
        </div>
        </navbar>
    )
}

export default Nav;