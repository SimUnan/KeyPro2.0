"use client"

import React from 'react'
import { truncateText } from '@/app/utils/truncateText';
import Image from 'next/image';
import { formatPrice } from '@/app/utils/formatPrice';

interface props{
  data: any
}

const ProductCard = ({
data
}: props) => {
  
  return (
    <div id={data.id} className='w-full px-4 py-5 hover:scale-[1.12] cursor-pointer transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-y-2 bg-slate-50 shadow-md border-[1.2px] border-slate-200 rounded-md'>
      <div className='relative aspect-square overflow-hidden w-full'>
        <Image src={data.images[0].image} alt={data.name} fill className='w-full h-full object-contain'/>
      </div>
        <p className='text-[16px] mt-4 text-nowrap'>{truncateText(data.name)}</p>
        <p className='text-center mt-2'>{formatPrice(data.price)}</p>
    </div>
  )
}

export default ProductCard