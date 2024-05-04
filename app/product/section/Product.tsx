"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DummyProducts } from "../dummyData";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const router = useRouter();

  const [products, setProducts] = useState<any[]>();
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);

  return (
    <section className="w-full h-auto py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8">
      {loadingProduct && (
        <div className="w-full col-span-2 md:col-span-3 xl:col-span-4 2xl:col-span-6 h-full md:h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-8">
          {Array(12).fill(0).map((_, i) => (
            <Skeleton
            key={i}
             className="w-full h-[250px] md:h-[350px]"
              baseColor="#d4d3d3"
              highlightColor="#e7e7e7"
            />
          ))}
        </div>
      )}
      {DummyProducts?.map((data, idx) => (
        <div key={idx} onClick={() => router.push(`/product/${data.id}`)}>
          <ProductCard
            data={data}
          />
        </div>
      ))}
    </section>
  );
};

export default Product;
