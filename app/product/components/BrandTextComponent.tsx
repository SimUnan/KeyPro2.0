import React from 'react'

interface BrandTextInterface {
    title: string;
    des: string;
}

const BrandTextComponent = ({title, des}: BrandTextInterface) => {
  return (
    <div className="w-1/2 grid grid-cols-2 items-center justify-center gap-5">
    <div className="w-full grid grid-cols-2 text-base font-semibold font-Poppins text-neutral-600">
    <p className='text-left'>
      {title}
    </p>
    <p className='text-right'>:</p>
    </div>
    <p className="text-base font-medium text-neutral-700">
      {des}
    </p>
  </div>
  )
}

export default BrandTextComponent
