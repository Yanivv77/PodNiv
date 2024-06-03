'use client';

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className={cn("left_sidebar h-[calc(100vh-5px)]", {
      
    })}>
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/podniv-icon.svg" alt="logo" width={40} height={40} />
          <h1 className="text-32 font-extrabold pl-2 text-white max-lg:hidden">PodNiv</h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive = pathname === route || pathname.startsWith(`${route}/`);

          return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", {
            'bg-nav-focus border-r-4 border-green-1': isActive
          })}>
           <Image src={imgURL} alt={label} width={24} height={24} style={{ filter: 'hue-rotate(120deg)' }} />
            <p>{label}</p>
          </Link>
        })}
      </nav>  
    
    </section>
  )
}

export default LeftSidebar