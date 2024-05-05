

import React from 'react'
import ProductDetail from './ProductDetail'
import { DummyProducts } from '../dummyData';
import { DummyOneProductdata } from './utils/dummyOneData';
import PageLayout from '@/app/components/PageLayout';

interface IPrams {
    productId?:string;
}

const ProductDetailPage = ({ params }: {params: IPrams}) => {
    console.log(`params:`, params);
    return (
    <PageLayout>
      <ProductDetail product={DummyOneProductdata}/>
    </PageLayout>
  )
}

export default ProductDetailPage
