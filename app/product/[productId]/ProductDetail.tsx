"use client";

import { Horizontal } from "@/utils/Horizontal";
import Image from "next/image";
import React from "react";
import BrandTextComponent from "../components/BrandTextComponent";

interface ProductDetailProps {
  product?: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="py-10 w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-10">
      <div className="w-full flex items-center justify-center">
        <div className="relative w-full md:w-full lg:w-1/2 aspect-square ">
          <Image
            src={product.images[0].image}
            alt={`${product.name}`}
            fill
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-Poppins font-medium">
          {product?.name}
        </p>
        <Horizontal />
        <p className="text-base text-neutral-700 font-Roboto">
          {product.description}
        </p>
        <Horizontal />
        <BrandTextComponent title={"Category"} des={product.category}/>
        <BrandTextComponent title={"Brand"} des={product.brand}/>
        <div className="font-Poppins">{product.inStock ? <p className='text-teal-500 font-medium'>In stock</p> : <p className='text-red-400 font-medium'>Out of stock</p>}</div>
        <Horizontal />
      </div>
    </div>
  );
};

export default ProductDetail;
