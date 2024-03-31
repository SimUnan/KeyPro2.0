import React from 'react'
import ProductComponent from '../component/ProductComponent'

const Product = () => {
  return (
    <section className='w-full h-auto grid grid-cols-4 gap-4'>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
    </section>
  )
}

export default Product