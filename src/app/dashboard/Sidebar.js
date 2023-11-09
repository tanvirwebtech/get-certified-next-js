import Link from "next/link";
import React from "react";
import NavLink from "../components/navlink/Navlink";
const navLinks = [
    {
        path: "/dashboard",
        title: "Dashboard",
    },
    {
        path: "/dashboard/addBanner",
        title: "Add Banner",
    },
    {
        path: "/dashboard/addProducts",
        title: "Add Products",
    },
    {
        path: "/",
        title: "Home",
    },
];

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">DashBoard</h1>
            <ul>
                {navLinks.map(({ path, title }) => (
                    <li key={path} className="my-2">
                        <NavLink
                            exact={path === "/" || path === "/dashboard"}
                            activeClassName={"text-blue-500"}
                            href={path}
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
