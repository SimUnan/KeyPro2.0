'use client'

import React from 'react'
import Link from 'next/link'

import PageLayout from '../PageLayout'
import { CiShoppingCart, CiUser } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-30 w-full py-5 bg-neutral-200'>
      <PageLayout>
        <div className='w-full flex items-center justify-between gap-5 md:gap-0'>
          <Link href='/' className={`text-xl font-bold text-slate-900 uppercase`}>Key Pro</Link>
            <input type="text" placeholder='Search' className='border focus:outline-none focus:border-neutral-500 border-neutral-100 border-opacity-20 rounded-xl text-center py-[2px] bg-transparent w-1/3 focus:scale-110 transition-all duration-300 ease-in-out' />
          <div className='flex items-center justify-center gap-2 md:gap-5 xl:gap-8'>
            <Link href='/card'><CiShoppingCart className='w-7 h-7' /></Link>
            <Link href='/profile'><CiUser className='w-7 h-7'/></Link>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Navbar
