"use client";

import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const CartPage = () => {

  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center justify-center gap-4 py-10">
        <p className="text-xl font-thin">Your cart is empty.</p>
        <Link
          className="text-neutral-500 font-extralight hover:underline cursor-pointer"
          href={"/"}
        >
          <span className="flex items-center justify-center gap-2">
            <BsArrowLeft /> Start shopping
          </span>
        </Link>
      </div>
    </PageLayout>
  );
};

export default CartPage;
