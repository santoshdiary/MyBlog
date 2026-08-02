import React from 'react'
import { Container, Logo, LogoutBtn, } from './index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Hearder = () => {

  const authStatus = useSelector((state) => state.auth.status) //getting login or logout status from store
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'About',
      slug: '/about',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='sticky top-0 z-50 border-b border-canopy-dark/40 bg-canopy/95 py-2 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-canopy/90 '>
      <nav className='mx-2 flex flex-col items-center gap-2 sm:mx-4 sm:flex-row sm:justify-between'>
        <div className='flex items-center justify-center sm:justify-start'>
          <Link to='/'>
            <Logo width='84px' />
          </Link>
        </div>

        <ul className='flex flex-wrap items-center justify-center gap-1 sm:ml-auto sm:justify-end'>
          {navItems.map((item) => {
            const isActive = item.slug === '/' ? location.pathname === '/' : location.pathname.startsWith(item.slug)

            return item.active ? (
              <li key={item.name} className='relative'>
                <button
                  onClick={() => navigate(item.slug)}
                  className={`group relative inline-flex flex-col items-center px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${isActive ? 'text-white' : 'text-mist/70 hover:text-white'}`}
                >
                  {item.name}
                  <span
                    className={`pointer-events-none absolute -bottom-[3px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-leaf transition-all duration-300 ease-out ${isActive ? 'w-6 opacity-100' : 'w-0 opacity-0 group-hover:w-4 group-hover:bg-sprout group-hover:opacity-60'}`}
                  />
                </button>
              </li>
            ) : null
          })}

          {authStatus && (
            <li className='ml-1 border-l border-mist/20 pl-2 sm:ml-2'>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Hearder
