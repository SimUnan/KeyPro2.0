import React from 'react'

interface ProductDetailProps{
  product: any
}

const ProductDetail = ({product}:ProductDetailProps) => {
  return (
    <div>
        <p>{product.name}</p>
    </div>
  )
}

export default ProductDetail
