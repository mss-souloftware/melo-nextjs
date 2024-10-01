import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className='py-3'>
      <div className="px-4 mx-auto">
        <div className="flex w-full">
          <div className='w-1/3'>
            <Logo />
          </div>
          <div className={`${styles.navlinks} w-1/3 flex`}>
            <ul>
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
          </div>
          <div className={`${styles.cartBtn} w-1/3 flex justify-end items-center`}>
            <Link href="https://meloseltzer.com/">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
