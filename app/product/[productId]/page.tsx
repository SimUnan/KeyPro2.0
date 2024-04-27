import React from 'react'
import ProductDetail from './ProductDetail'

interface IPrams {
    productId?:string;
}

const ProductDetailPage = ({ params }: {params: IPrams}) => {
    console.log(`params:`, params);
    return (
    <div>
      <ProductDetail/>
    </div>
  )
}

export default ProductDetailPage
