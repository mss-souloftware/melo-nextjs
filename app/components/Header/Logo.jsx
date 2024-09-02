import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/">
        <Image src="/images/logo_melo.webp" alt='Melo' width={200} height={100} />
    </Link>
  )
}
