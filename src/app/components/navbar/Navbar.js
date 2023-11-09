import Link from "next/link";
import React from "react";
import NavLink from "../navlink/Navlink";

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/profile", title: "Profile" },
    { path: "/blogs", title: "Blogs" },
    { path: "/dashboard", title: "Dashboard" },
];
const Navbar = () => {
    return (
        <nav className="container mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Next APP</h1>
            <ul className="flex items-center justify-center">
                {navLinks.map(({ path, title }) => (
                    <li key={path} className="mx-2">
                        <NavLink
                            exact={path === "/"}
                            activeClassName={"text-blue-500"}
                            href={path}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
