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
    <div className="flex w-1/2 items-center justify-center px-2 py-3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="group relative h-28 w-full overflow-hidden rounded-xl border border-slate-200 bg-white/75 p-4 shadow-sm transition duration-300 ease-in-out hover:border-primary hover:bg-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:bg-slate-800"
      >
        <div className="absolute inset-0 pointer-events-none bg-black/10 transition duration-300 group-hover:bg-transparent" />
        <div className="relative h-full w-full opacity-90 transition duration-300 group-hover:opacity-100 group-hover:scale-110">
          <Image src={imageLight} alt={name} fill className="hidden dark:block object-contain" />
          <Image src={image} alt={name} fill className="block dark:hidden object-contain" />
        </div>
      </a>
    </div>
  );
};
