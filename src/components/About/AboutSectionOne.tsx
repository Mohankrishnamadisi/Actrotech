import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-7.5 w-7.5 items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/15 pb-16 dark:border-white/15 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Actrotech – Your Technology Partner"
                paragraph="Actrotech Tech Solutions Pvt Ltd is a trusted IT partner delivering high-quality software solutions and staffing services to global clients. We specialize in custom software development, product engineering, cloud solutions, IT staffing, and third-party vendor services."
                mb="44px"
              />

              <div
                className="mb-12 max-w-142.5 lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Custom Software Development" />
                    <List text="Cloud Solutions" />
                    <List text="Agile Methodology" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Product Engineering" />
                    <List text="IT Staffing Services" />
                    <List text="24/7 Support" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="group relative mx-auto aspect-25/24 max-w-125 lg:mr-0">
                <div className="absolute inset-0 rounded-[30px] bg-linear-to-br from-cyan-400/20 via-indigo-500/10 to-purple-500/10 blur-xl opacity-70 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-2xl transition-transform duration-500 ease-out hover:scale-105">
                  <Image
                    src="/images/about/about-image.svg"
                    alt="about-image"
                    width={500}
                    height={500}
                    className="mx-auto max-w-full dark:hidden"
                  />

                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
                    width={500}
                    height={500}
                    className="mx-auto hidden max-w-full dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
