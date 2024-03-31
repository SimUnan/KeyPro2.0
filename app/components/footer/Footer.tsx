import React from 'react'
import PageLayout from '../PageLayout'
import FooterComponent from './FooterComponent'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full py-10 bg-slate-800'>
      <PageLayout>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
          <FooterComponent title='Shop Categories'>
            <Link href={'/'}>Keyboard</Link>
            <Link href={'/'}>Mouse</Link>
            <Link href={'/'}>Laptop</Link>
            <Link href={'/'}>Monitor</Link>
          </FooterComponent>
        </div>
      </PageLayout>
    </div>
  )
}

export default Footer
