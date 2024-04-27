import React from 'react'
import Img1 from '@/app/Assets/img-1.png'
import Image from 'next/image'

interface props{
  id: string;
  name: string;
  price: number;
  imgSrc?: string;
}

const ProductComponent = ({
  id,
  name,
  price,
  imgSrc
}: props) => {
  
  console.log(`imgSrc`, imgSrc)

  return (
    <div id={id} className='w-auto max-h-[400px] hover:scale-[1.12] cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center flex-col bg-neutral-100 bg-opacity-60 shadow-md border border-slate-200 rounded-md '>
      <div className='w-full md:w-full min-h-[250px] md:min-h-[250px] relative px-2 md:px-3 py-2'>
        {/* <Image src={Img1} alt="T-shirt" className='' layout='fill' objectFit='contain'/> */}
        <img src={imgSrc} alt="" className='w-full min-h-[250px] max-h-[250px] object-contain'/>
      </div>
      <div className='w-full h-[85px] px-5 py-2'>
        <h4 className='w-full h-full  text-wrap overflow-hidden'>{name}</h4>
      </div>
        <p className='w-full h-[50px] text-center py-2'>Price: ${price}</p>
    </div>
  )
}

export default ProductComponent