import React from 'react'
import PageLayout from '../PageLayout'
import FooterComponent from './FooterComponent'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {

  const FooterArray = [
    {
      title: "Shop Categories",
      data: [
        {
          title: "Keyboard",
          href: "/products/keyboards",
        },
        {
          title: "Mouse",
          href: "/products/mouses",
        },
        {
          title: "Laptop",
          href: "/products/laptops",
        },
        {
          title: "Monitor",
          href: "/products/monitors",
        },
      ]
    },
    {
      title: "Customer Service",
      data: [
        {
          title: "Contact Us",
          href: "/customer-service/contactus",
        },
        {
          title: "Shipping Policy",
          href: "/customer-service/shipping-policy",
        },
        {
          title: "Returns & Exchanges",
          href: "/customer-service/returns-exchanges",
        },
        {
          title: "Watches",
          href: "/customer-service/watches",
        },
        {
          title: "FAQs",
          href: "/customer-service/faqs",
        },
      ]
    },
  ]

  return (
    <div className='w-full py-10 bg-slate-800'>
      <PageLayout>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 items-start justify-center'>
          {FooterArray.map((data, idx) => (
            <FooterComponent key={idx} title={data.title}>
              {data.data.map((items, idx) => (
                <Link key={idx} href={items.href} className='hover:underline hover:scale-110'>{items.title}</Link>
              ))}
            </FooterComponent>
          ))}
          <FooterComponent title='About Us'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quasi culpa ipsa officiis itaque perspiciatis esse, hic necessitatibus, reprehenderit in laboriosam soluta, minus voluptate deserunt nemo nihil incidunt quae mollitia!</p>
            <p>&copy; {new Date().getFullYear()} Key-Pro All rights reserved</p>
          </FooterComponent>
          <FooterComponent title='Follow Us'>
            <div className='w-full flex items-center justify-starts gap-5'>
              <Link href={'#'}><FaFacebook className='w-[28px] h-[28px]'/></Link>
              <Link href={'#'}><FaInstagram className='w-[28px] h-[28px]'/></Link>
              <Link href={'#'}><FaTelegram className='w-[28px] h-[28px]'/></Link>
            </div>
          </FooterComponent>
        </div>

      </PageLayout>
    </div>
  )
}

export default Footer
