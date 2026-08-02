import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
    const width = "160px";

    const footerLink =
        "text-base font-medium text-mist/90 transition-colors duration-200 hover:text-leaf";

    return (
        <section className="relative overflow-hidden border-t border-canopy-dark/60 bg-canopy-deep py-10 text-mist">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">

                    {/* Left Section */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">

                            <div>
                                <div className="mb-5 inline-flex items-center">
                                    <Logo width={width} />
                                </div>

                                <p className="max-w-sm text-sm leading-7 text-mist/70">
                                    <span className="font-semibold text-white">
                                        Write. Share. Inspire.
                                    </span>
                                    <br />
                                    A modern blogging platform to publish your
                                    ideas, explore insightful stories, and
                                    connect with readers from around the world.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-amber-200 text-sm">
                                    © {new Date().getFullYear()} MyBlog. Built
                                    with ❤️ by Santosh Kumar.
                                </p>
                                <p className="text-sm text-gray-500">Email:santosh.skm2019@gmail.com</p>
                            </div>

                        </div>
                    </div>

                    {/* Explore */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 font-display text-xs font-semibold uppercase text-sprout">
                                Explore
                            </h3>

                            <ul >

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link className={footerLink} to="/">
                                        Home
                                    </Link>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/all-posts"
                                    >
                                        All Posts
                                    </Link>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/add-post"
                                    >
                                        Write a Post
                                    </Link>
                                </li>

                                <li className=" text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/signup"
                                    >
                                        Join Community
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 font-display text-xs font-semibold uppercase text-sprout">
                                Account
                            </h3>

                            <ul>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/signup"
                                    >
                                        Sign Up
                                    </Link>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/all-posts"
                                    >
                                        Browse Posts
                                    </Link>
                                </li>

                                <li className=" text-mist/70 hover:text-white">
                                    <Link
                                        className={footerLink}
                                        to="/about"
                                    >
                                        About
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 font-display text-xs font-semibold uppercase text-sprout">
                                Connect
                            </h3>

                            <ul>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <a
                                        href="https://portfolio-six-blue-38.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={footerLink}
                                    >
                                        Portfolio
                                    </a>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <a
                                        href="https://github.com/santoshdiary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={footerLink}
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <a
                                        href="https://www.linkedin.com/in/santosh-kumar-86a087394/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={footerLink}
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li className="mb-4  text-mist/70 hover:text-white">
                                    <a
                                        href="https://www.instagram.com/santosh_diary/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={footerLink}
                                    >
                                        Instagram
                                    </a>
                                </li>

                               

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Footer;