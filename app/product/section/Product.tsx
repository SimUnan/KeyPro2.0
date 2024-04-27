"use client";

import React, { useEffect, useState } from "react";
import ProductComponent from "../component/ProductComponent";
import { useRouter } from "next/navigation";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const router = useRouter();

  const [products, setProducts] = useState<any[]>();
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);

  const getProducts = async () => {
    setLoadingProduct(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      // console.log(`res:`, res)
      setProducts(res.data);
      setLoadingProduct(false);
    } catch (error) {
      console.error(error);
      setLoadingProduct(false);
      setProducts(undefined);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-full h-auto py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8">
      {loadingProduct && (
        <div className="w-full col-span-2 md:col-span-3 xl:col-span-4 2xl:col-span-6 h-full md:h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-8">
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
      {products?.map((data, idx) => (
        <div key={idx} onClick={() => router.push(`/product/${data.id}`)}>
          <ProductComponent
            id={data.id}
            name={data.title}
            price={data.price}
            imgSrc={data.image}
          />
        </div>
      ))}
    </section>
  );
};

export default Product;
