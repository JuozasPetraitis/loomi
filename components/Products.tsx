import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductsData } from "../utils/Data";

const Products = () => {
  return (
    <div className="pb-28">
      <div className="grid grid-rows-1 gap-y-20">
        <div className="flex flex-col gap-8">
          <h1>Our products</h1>
          <h2>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus vitae.</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {ProductsData.category.map((item, index) => (
            <Link href={`/shop/${ProductsData.title[index]}`} key={index}>
              <div className="grid cursor-pointer grid-rows-[20rem] gap-4 rounded-md 2xl:grid-rows-[28rem]">
                <div className="relative transition-transform duration-500 hover:scale-y-105">
                  <Image
                    src={`/assets/images/products/${ProductsData.title[index]}.jpg`}
                    alt={`${ProductsData.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md opacity-80 transition-all duration-500 hover:scale-x-95 hover:opacity-100"
                  />
                </div>
                <div className="flex cursor-pointer flex-col text-center">
                  <p className="cursor-pointer uppercase text-primary">{item}</p>
                  <p className="cursor-pointer text-2xl uppercase">{ProductsData.title[index]}</p>
                  <p className="cursor-pointer">{ProductsData.price[index]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
