import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa6";

function Footer() {
  const linkClass = "flex items-center gap-2 text-sm text-mist/70 transition hover:text-white";

  return (
    <footer className="border-t border-canopy-dark/40 bg-canopy-deep text-mist">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo width="120px" />
            <p className="mt-4 text-sm leading-7 text-mist/70">
              <span className="font-semibold text-white">Write. Share. Inspire.</span><br />
              A modern blogging platform to publish ideas and connect with readers.
            </p>
            <div className="mt-5 flex items-center gap-4 text-xl">
              <a href="https://github.com/santoshdiary" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/santosh-kumar-86a087394/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/santosh_diary/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sprout">Explore</h3>
            <ul className="space-y-3">
              <li><Link className={linkClass} to="/">Home</Link></li>
              <li><Link className={linkClass} to="/all-posts">All Posts</Link></li>
              <li><Link className={linkClass} to="/my-posts">My Posts</Link></li>
              <li><Link className={linkClass} to="/add-post">Write a Post</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sprout">Account</h3>
            <ul className="space-y-3">
              <li><Link className={linkClass} to="/login">Login</Link></li>
              <li><Link className={linkClass} to="/signup">Sign Up</Link></li>
              <li><Link className={linkClass} to="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sprout">Connect</h3>
            <ul className="space-y-3">
              <li><a className={linkClass} href="https://portfolio-six-blue-38.vercel.app/" target="_blank" rel="noreferrer"><FaGlobe /> Portfolio</a></li>
              <li><a className={linkClass} href="mailto:santosh.skm2019@gmail.com"><FaEnvelope /> santosh.skm2019@gmail.com</a></li>
              <li><a className={linkClass} href="https://github.com/santoshdiary" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></li>
              <li><a className={linkClass} href="https://www.linkedin.com/in/santosh-kumar-86a087394/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-mist/60 md:flex-row">
          <p>© {new Date().getFullYear()} MyBlog. Built with ❤️ by Santosh Kumar.</p>
          <p>Made using React • Tailwind CSS • Appwrite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;