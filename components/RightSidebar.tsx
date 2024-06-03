'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Header from './Header';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const RightSidebar = () => {
  const router = useRouter();

  return (
    <section className={cn('right_sidebar h-[calc(100vh-5px)]', {
    })}>
   
        <Link href={`/profile/$`} className="flex gap-3 pb-12">
      
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1"></h1>
            <Image 
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      <section>
        <Header headerTitle="Fans Like You" />
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcastrs" />
        <div className="flex flex-col gap-6">
        </div>
      </section>
    </section>
  )
}

export default RightSidebar