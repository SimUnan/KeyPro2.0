import React from "react";
import Image from "next/image";

import KeyboardsBanner from "../Assets/KeyboardsBanner.png";

const HomeBanner = () => {
  return (
    <section className="md:w-full xl:w-[70%] mt-10 mx-auto bg-gradient-to-r from-sky-500 to-sky-700 rounded-sm shadow-md py-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-y-5 px-5">
        <div className=" flex flex-col items-center md:items-start justify-center gap-4">
          <h1 className="text-5xl font-semibold text-neutral-100">
            Summer Sale
          </h1>
          <p className="text-2xl font-extralight text-neutral-200">
            Enjoy discount on selected items.
          </p>
          <p className="text-4xl font-semibold text-yellow-300">GET 50% OFF </p>
        </div>
        <div className="relative w-full sm:w-1/2 md:w-1/3 aspect-video">
          <Image
            src={KeyboardsBanner}
            alt="Banner img"
            fill
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
