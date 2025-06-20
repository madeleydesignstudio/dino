import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PrimaryNavbar = () => {
  return (
    <div className="sticky top-0 z-50 h-[40px] border border-neutral-200 w-full flex items-center justify-center">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.dev-0af.workers.dev/dino-logo.png"
            alt="Dino"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium">Dino</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default PrimaryNavbar
