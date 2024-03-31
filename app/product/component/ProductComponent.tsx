import React from 'react'
import Img1 from '@/app/Assets/img-1.png'
import Image from 'next/image'

const ProductComponent = () => {
  return (
    <div className='bg-gray-500 rounded m-5'>
      <div>
        <Image src={Img1} alt="T-shirt" className='' />
      </div>
      <div className='px-5 py-2'>
        <h4 className='font-semibold '>POLO</h4>
        <p>Price: $19.50</p>
      </div>
      
    </div>
  )
}

export default ProductComponent