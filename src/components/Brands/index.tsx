import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  const marqueeItems = [...brandsData, ...brandsData];

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 overflow-hidden px-4">
          <div className="flex min-w-max items-center gap-10 py-8 animate-marquee">
            {marqueeItems.map((brand, index) => (
              <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center px-4">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="group flex items-center justify-center 
                   h-32 md:h-36 lg:h-40 
                   w-[200px] md:w-[240px] lg:w-[280px]
                   rounded-2xl border border-slate-200 
                   bg-white/80 p-6 shadow-md
                   transition duration-300 ease-in-out 
                   hover:shadow-xl hover:scale-105
                   dark:border-slate-700 dark:bg-slate-900/80"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={imageLight}
            alt={name}
            width={180}
            height={80}
            className="hidden dark:block object-contain transition duration-300 group-hover:scale-110"
          />
          <Image
            src={image}
            alt={name}
            width={180}
            height={80}
            className="block dark:hidden object-contain transition duration-300 group-hover:scale-110"
          />
        </div>
      </a>
    </div>
  );
};