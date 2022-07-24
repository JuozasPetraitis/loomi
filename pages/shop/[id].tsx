import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import { ProductsData } from "../../utils/Data";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const rata = ProductsData.title.findIndex((item) => item === id);
  return (
    <Layout>
      <p
        onClick={() => router.push("/shop")}
        className="m-0 w-full cursor-pointer text-center text-3xl font-medium tracking-[0.2em] transition-all duration-300 ease-out hover:font-semibold hover:tracking-[0.3em] md:text-left "
      >
        GO BACK
      </p>
      <div className="pt-28">
        <div className="grid gap-8 md:hidden">
          <h1>{id}</h1>
          <div className="relative h-[24rem]">
            <Image src={`/assets/images/products/${id}.jpg`} alt={`${id}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <p className="text-center md:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor at sequi voluptatum, minus reiciendis. Nesciunt alias aut libero itaque, est
            placeat quibusdam mollitia voluptates dolores eligendi quam. Eum, eos. Maxime pariatur, eius accusamus tempore illum nam magnam!
          </p>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor at sequi voluptatum, minus reiciendis. Nesciunt alias aut libero itaque, est
            placeat quibusdam mollitia voluptates dolores eligendi quam. Eum, eos. Maxime pariatur, eius accusamus tempore illum nam magnam! Adipisci ipsam
            dolorum, cupiditate distinctio doloribus architecto deleniti laborum quaerat quisquam molestias debitis in est hic ipsum consectetur aperiam vel
            blanditiis eum? Dolore laborum cupiditate officia, eaque illo molestias cum provident similique in. Eum distinctio voluptatum optio ex eaque
            repellat harum modi perspiciatis eligendi laudantium quo corrupti architecto, ipsum aspernatur at sint.
          </p>
          <p className="text-center text-lg">Price: {ProductsData.price[rata]}</p>
        </div>

        <div className="hidden md:grid md:grid-cols-[40%,60%] md:grid-rows-1">
          <div className="relative h-[40rem]">
            <Image src={`/assets/images/products/${id}.jpg`} alt={`${id}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="flex flex-col justify-center gap-8 px-8">
            <h1>{id}</h1>
            <p className="text-center md:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor at sequi voluptatum, minus reiciendis. Nesciunt alias aut libero itaque,
              est placeat quibusdam mollitia voluptates dolores eligendi quam. Eum, eos. Maxime pariatur, eius accusamus tempore illum nam magnam!
            </p>
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor at sequi voluptatum, minus reiciendis. Nesciunt alias aut libero itaque,
              est placeat quibusdam mollitia voluptates dolores eligendi quam. Eum, eos. Maxime pariatur, eius accusamus tempore illum nam magnam! Adipisci
              ipsam dolorum, cupiditate distinctio doloribus architecto deleniti laborum quaerat quisquam molestias debitis in est hic ipsum consectetur aperiam
              vel blanditiis eum? Dolore laborum cupiditate officia, eaque illo molestias cum provident similique in. Eum distinctio voluptatum optio ex eaque
              repellat harum modi perspiciatis eligendi laudantium quo corrupti architecto, ipsum aspernatur at sint.
            </p>
            <p className="text-center text-lg">Price: {ProductsData.price[rata]}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
