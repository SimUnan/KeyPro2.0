'use client'

import React from 'react'
import Link from 'next/link'

import PageLayout from '../PageLayout'
import { TbCarTurbine } from 'react-icons/tb'
import { CiShoppingCart, CiUser } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-30 w-full py-5 bg-slate-100 '>
      <PageLayout>
        <div className='w-full flex items-center justify-between gap-5 md:gap-0'>
          <Link href='/' className={`text-xl font-bold text-slate-900 uppercase`}>Key Pro</Link>
          <div>
            <p>Search</p>
          </div>
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
