import React from 'react'
import ProductDetail from './ProductDetail'
import { products } from '../section/Product';

interface IPrams {
    productId?:string;
}

const ProductDetailPage = ({ params }: {params: IPrams}) => {
    console.log(`params:`, params);
    return (
    <div>
      <ProductDetail product={products}/>
    </div>
  )
}

export default ProductDetailPage
