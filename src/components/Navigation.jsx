import React, { useState } from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'

function Navigation() {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  const toggleMoblieMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible)
  }

  return (
    <nav className="bg-white">
      <div className="mx-4 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-32 w-32" src={logo} alt="Toad House" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    SELLER LOGIN
                  </a>
                  <a
                    href="/"
                    className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    BUYER LOGIN
                  </a>
                  <a
                    href="/"
                    className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    SIGN UP
                  </a>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <span className="text-black-300 rounded-md px-3 py-2 text-sm font-medium">
                  Welcome, <span className="font-bold">junns</span>
                </span>
                <span className="text-green-300 rounded-md px-3 py-2 text-sm font-bold">
                  400P
                </span>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isMenuVisible}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user}
                      alt="user"
                    />
                  </button>
                </div>
                {isMenuVisible && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                    id="navbar-menu-box"
                  >
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuVisible}
              id="mobile-menu-button"
              aria-haspopup="true"
              onClick={toggleMoblieMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuVisible && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="/"
              className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
            >
              SELLER LOGIN
            </a>
            <a
              href="/"
              className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
            >
              BUYER LOGIN
            </a>
            <a
              href="/"
              className="text-black-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
            >
              SIGN UP
            </a>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user} alt="user" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-black">
                  Welcome, <span className="font-bold">junns</span>
                </div>
                <div className="text-sm font-bold leading-none text-green-300 mt-1">
                  400P
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
