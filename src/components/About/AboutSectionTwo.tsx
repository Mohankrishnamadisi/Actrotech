import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="group relative mx-auto mb-12 aspect-25/24 max-w-117.5 text-center lg:m-0" data-wow-delay=".15s">
              <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-violet-500/20 via-blue-500/15 to-cyan-400/15 blur-xl opacity-70 transition-all duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[26px] border border-white/20 shadow-2xl transition-transform duration-500 ease-out hover:scale-105">        
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                width={500}
                height={500}
                className="mx-auto dark:hidden"
              />

              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                width={500}
                height={500}
                className="mx-auto hidden dark:block"
              />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-117.5">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quality Assurance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We ensure every software solution we deliver is thoroughly tested and bug-free, using industry best practices to guarantee reliability and performance.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our team provides ongoing support and maintenance to keep your applications running smoothly and up-to-date with the latest technologies.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Modern Technologies
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We leverage the latest technologies including cloud computing, AI, and modern frameworks to build scalable and future-proof software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
