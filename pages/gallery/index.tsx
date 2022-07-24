import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

const GalleryPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8 pt-28">
        <h1>Gallery</h1>
        <div className="grid auto-rows-[20rem] gap-1 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-x-4 2xl:gap-y-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <div key={item} className="relative">
              <Image src={`/assets/images/gallery/${item}.jpg`} alt="" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
