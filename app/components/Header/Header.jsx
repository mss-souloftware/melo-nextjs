import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import styles from './Header.module.css'
import { FiMenu, FiX } from 'react-icons/fi' // Install react-icons if not already

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex space-x-8 ${styles.navlinks}`}>
            <ul className="flex space-x-4">
              <li>
                <Link href="https://meloseltzer.com/collections/all">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="https://meloseltzer.com/pages/about-us">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Cart Button */}
          <div className={`hidden md:flex items-center ${styles.cartBtn}`}>
            <Link href="https://meloseltzer.com/">
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-white hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${styles.mobileMenu}`}>
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <ul  className={`${styles.navlinks} flex flex-col space-y-2`}>
              <li>
                <Link
                  href="https://meloseltzer.com/collections/all"
                 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="https://meloseltzer.com/pages/about-us"
                  className={styles.navLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://meloseltzer.com/"
                  className={styles.navLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
