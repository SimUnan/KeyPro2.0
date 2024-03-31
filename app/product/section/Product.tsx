import React from 'react'
import ProductComponent from '../component/ProductComponent'

const Product = () => {
  return (
    <section className='w-full h-auto py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8'>
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