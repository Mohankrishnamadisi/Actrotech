'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
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
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              UI Development Services
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-300">
              We design and build modern, responsive, and high-performance user interfaces that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={uiImage}
              alt="UI Development"
              width={500}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeOffer.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white border'
                }`}
              >
                <Icon size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{offer.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Technologies & Tools</h2>
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

      {/* Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our UI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white border'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-600" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose ActroTech?</h2>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">UI Showcase</h2>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Stunning User Interfaces Together</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}