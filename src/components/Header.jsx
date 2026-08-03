import React, { useState } from "react";
import { Logo, LogoutBtn } from "./index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    HiOutlineHome,
    HiOutlineInformationCircle,
    HiOutlineArrowRightOnRectangle,
    HiOutlineUserPlus,
    HiOutlineSquares2X2,
    HiOutlineDocumentText,
    HiOutlineDocumentPlus,
    HiOutlineBars3,
    HiOutlineXMark,
} from "react-icons/hi2";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            icon: HiOutlineHome,
            active: true,
        },
        {
            name: "About",
            slug: "/about",
            icon: HiOutlineInformationCircle,
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            icon: HiOutlineArrowRightOnRectangle,
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            icon: HiOutlineUserPlus,
            active: !authStatus,
        },
        {
            name: "My Posts",
            slug: "/my-posts",
            icon: HiOutlineDocumentText,
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            icon: HiOutlineDocumentPlus,
            active: authStatus,
        },
    ];

    const handleNavigate = (slug) => {
        navigate(slug);
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-canopy-dark/30 bg-canopy/95 backdrop-blur-md">

            {/* Navbar */}

            <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-8">

                {/* Logo */}

                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center"
                >
                    <Logo width="72px" />
                </Link>

                {/* Desktop Navigation */}

                <ul className="hidden items-center gap-7 lg:flex">

                    {navItems.map((item) => {

                        if (!item.active) return null;

                        const isActive =
                            item.slug === "/"
                                ? location.pathname === "/"
                                : location.pathname.startsWith(item.slug);

                        return (
                            <li key={item.name}>

                                <button
                                    onClick={() => navigate(item.slug)}
                                    className={`group relative flex items-center gap-2 py-2 text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-white"
                                            : "text-mist/70 hover:text-white"
                                    }`}
                                >

                                    {/* Icon */}

                                    <item.icon className="h-5 w-5" />

                                    {/* Text */}

                                    <span>{item.name}</span>

                                    {/* Active Underline */}

                                    <span
                                        className={`absolute -bottom-[2px] left-1/2 h-[2.5px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "w-8 bg-sprout"
                                                : "w-0 bg-sprout group-hover:w-5"
                                        }`}
                                    />

                                </button>

                            </li>
                        );
                    })}

                    {authStatus && (
                        <li className="ml-2 border-l border-white/20 pl-5">
                            <LogoutBtn />
                        </li>
                    )}

                </ul>

                {/* Mobile Hamburger */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-1.5 text-white transition hover:bg-white/10 lg:hidden"
                >
                    {menuOpen ? (
                        <HiOutlineXMark className="h-7 w-7" />
                    ) : (
                        <HiOutlineBars3 className="h-7 w-7" />
                    )}
                </button>

            </nav>

            {/* Mobile Menu */}

            <div
                className={`overflow-hidden border-t border-white/10 bg-canopy transition-all duration-300 lg:hidden ${
                    menuOpen
                        ? "max-h-[500px]"
                        : "max-h-0"
                }`}
            >

                <ul className="flex flex-col px-5 py-3">

                    {navItems.map((item) => {

                        if (!item.active) return null;

                        const isActive =
                            item.slug === "/"
                                ? location.pathname === "/"
                                : location.pathname.startsWith(item.slug);

                        return (
                            <li key={item.name}>

                                <button
                                    onClick={() => handleNavigate(item.slug)}
                                    className={`group relative flex w-full items-center gap-3 py-3 text-left text-sm font-medium transition-colors ${
                                        isActive
                                            ? "text-white"
                                            : "text-mist/70 hover:text-white"
                                    }`}
                                >

                                    <item.icon className="h-5 w-5" />

                                    <span>{item.name}</span>

                                    <span
                                        className={`absolute bottom-2 left-0 h-[2px] rounded-full bg-sprout transition-all duration-300 ${
                                            isActive
                                                ? "w-8"
                                                : "w-0 group-hover:w-5"
                                        }`}
                                    />

                                </button>

                            </li>
                        );
                    })}

                    {authStatus && (
                        <li className="mt-3 border-t border-white/10 pt-4">
                            <LogoutBtn />
                        </li>
                    )}

                </ul>

            </div>

        </header>
    );
}

export default Header;