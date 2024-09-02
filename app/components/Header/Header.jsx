import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className='my-3'>
      <div className="px-4 mx-auto">
        <div className="flex w-full">
          <div className='w-1/3'>
            <Logo />
          </div>
          <div className={`${styles.navlinks} w-1/3 flex`}>
            <ul>
              <li>
                <Link href="#">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.cartBtn} w-1/3 flex justify-end items-center`}>
            <Link href="#">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
