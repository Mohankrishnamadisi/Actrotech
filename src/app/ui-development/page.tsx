'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { scrollToSection } from '@/lib/scroll';
import {
  Palette,
  Smartphone,
  Zap,
  RefreshCw,
  Code,
  Database,
  CheckCircle,
  Users,
  Cpu,
  Clock,
  Headphones,
  ArrowRight,
  Monitor,
  Layers,
  TestTube,
  Rocket,
} from 'lucide-react';

const whatWeOffer = [
  {
    title: 'Custom UI Development',
    description: 'We create tailored UI solutions based on your business needs.',
    icon: Palette,
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first, fully responsive UI across all devices.',
    icon: Smartphone,
  },
  {
    title: 'Single Page Applications (SPA)',
    description: 'Fast and dynamic apps using modern frameworks.',
    icon: Zap,
  },
  {
    title: 'UI Revamp & Modernization',
    description: 'Upgrade old UI into modern and attractive designs.',
    icon: RefreshCw,
  },
];

const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'Vue.js',
  'React.js',
  'Angular',
  'Bootstrap / Tailwind',
  'REST API Integration',
];

const process = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Understand business goals and user needs',
    icon: Users,
  },
  {
    step: 2,
    title: 'Wireframing',
    description: 'Create UI structure and layout',
    icon: Layers,
  },
  {
    step: 3,
    title: 'UI Design',
    description: 'Design modern and user-friendly interfaces',
    icon: Palette,
  },
  {
    step: 4,
    title: 'Development',
    description: 'Convert designs into functional UI',
    icon: Code,
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Ensure responsiveness and performance',
    icon: TestTube,
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Deliver production-ready UI',
    icon: Rocket,
  },
];

const keyFeatures = [
  'Pixel-perfect UI',
  'High Performance',
  'Cross-browser compatibility',
  'Clean and maintainable code',
  'SEO-friendly structure',
  'Accessibility support',
];

const whyChoose = [
  { title: 'Experienced UI Developers', icon: Users },
  { title: 'Modern Tech Stack', icon: Cpu },
  { title: 'Scalable Solutions', icon: Layers },
  { title: 'Fast Delivery', icon: Clock },
  { title: 'Dedicated Support', icon: Headphones },
];

export default function UIDevelopmentPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const uiImage = isDark ? '/images/new/ui-dark.png' : '/images/new/ui-light.png';

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section - Image Left Layout */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src={uiImage}
              alt="UI Development"
              width={500}
              height={400}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
              UI Development Services
            </h1>
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-8">
              We design and build modern, responsive, and high-performance user interfaces that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  }}className="group relative flex rounded-lg bg-linear-to-r cursor-pointer from-primary to-primary/80 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/70 hover:-translate-y-1 active:translate-y-0 items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
               <a href="/contact" className="group relative flex rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
              Contact Us
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Timeline Style */}
      <section id='products'className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">What We Offer</h2>
          <div className="max-w-4xl mx-auto">
            {whatWeOffer.map((offer, idx) => {
              const Icon = offer.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex items-center gap-8 mb-12 ${isEven ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-4 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{offer.description}</p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    {idx < whatWeOffer.length - 1 && (
                      <div className="w-0.5 h-16 bg-blue-600 mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Technologies & Tools</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Process - Horizontal Timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Our UI Development Process</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-blue-600 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 relative z-10">
                      {step.step}
                    </div>
                    <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-lg mb-4`}>
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features - Circular Layout */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Key Features</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="text-center group">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Why Choose ActroTech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center">
                <Icon size={64} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">UI Showcase</h2>
        <div className="flex justify-center">
          <Image
            src={isDark ? '/images/new/ui-preview-dark.png' : '/images/new/ui-preview-light.png'}
            alt="UI Preview"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">Let's Build Stunning User Interfaces Together</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <a href="/contact" className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}