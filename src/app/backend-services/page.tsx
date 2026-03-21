'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
  Code,
  Layers,
  Database,
  Zap,
  Cloud,
  CheckCircle,
  Users,
  Cpu,
  TestTube,
  Rocket,
  Building,
  ShoppingCart,
  Shield,
  Headphones,
  Server,
  ArrowRight,
} from 'lucide-react';

const whatWeOffer = [
  {
    title: 'Custom Backend Development',
    description: 'Tailored backend systems designed for your business needs.',
    icon: Code,
  },
  {
    title: 'API & Microservices Development',
    description: 'Build scalable APIs and microservices architecture.',
    icon: Layers,
  },
  {
    title: 'Database Design & Management',
    description: 'Efficient data modeling and optimized database performance.',
    icon: Database,
  },
  {
    title: 'System Integration',
    description: 'Connect multiple systems and services seamlessly.',
    icon: Zap,
  },
  {
    title: 'Cloud Backend Solutions',
    description: 'Deploy backend services on cloud infrastructure.',
    icon: Cloud,
  },
];

const technologies = [
  'Node.js',
  '.NET Core',
  'Express.js',
  'Java (Spring Boot)',
  'MongoDB / MySQL / PostgreSQL',
  'Redis (Caching)',
  'Docker / Kubernetes',
];

const keyFeatures = [
  'Scalable Architecture',
  'High Performance',
  'Secure Authentication (JWT / OAuth)',
  'Data Encryption',
  'Load Balancing',
  'Error Handling & Logging',
  'Caching Mechanisms',
];

const approach = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Understand system complexity and business logic',
    icon: Users,
  },
  {
    step: 2,
    title: 'Architecture Design',
    description: 'Design scalable and modular systems',
    icon: Layers,
  },
  {
    step: 3,
    title: 'Development',
    description: 'Implement backend services and APIs',
    icon: Code,
  },
  {
    step: 4,
    title: 'Optimization',
    description: 'Improve performance and scalability',
    icon: Cpu,
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Ensure reliability and security',
    icon: TestTube,
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Deploy using CI/CD pipelines',
    icon: Rocket,
  },
];

const useCases = [
  {
    title: 'Enterprise Applications',
    icon: Building,
  },
  {
    title: 'SaaS Platforms',
    icon: Cloud,
  },
  {
    title: 'Real-time Systems',
    icon: Zap,
  },
  {
    title: 'E-commerce Platforms',
    icon: ShoppingCart,
  },
  {
    title: 'Data Processing Systems',
    icon: Database,
  },
];

const whyChoose = [
  { title: 'Strong Backend Expertise', icon: Users },
  { title: 'Scalable System Design', icon: Layers },
  { title: 'Secure Development Practices', icon: Shield },
  { title: 'High Performance Systems', icon: Cpu },
  { title: 'Continuous Support', icon: Headphones },
];

export default function BackendServicesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const backendImage = isDark ? '/images/new/backend-dark.png' : '/images/new/backend-light.png';
  const previewImage1 = isDark ? '/images/new/ui-preview-dark.png' : '/images/new/ui-preview-light.png';
  const previewImage2 = isDark ? '/images/new/ui-preview-light.png' : '/images/new/ui-preview-dark.png';

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section - Server Architecture Theme */}
      <section className={`py-16 lg:py-24 ${isDark ? 'bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white' : 'bg-linear-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className={`mb-4 text-3xl font-bold leading-tight! sm:text-4xl md:text-[45px] ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Backend Development Services
            </h1>
            <p className={`text-base leading-relaxed! md:text-lg mb-4 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We build powerful, secure, and scalable backend systems that drive modern applications.
            </p>
            <p className={`text-base leading-relaxed! md:text-lg mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our backend solutions ensure seamless data processing, system integration, and business logic execution, enabling your applications to perform efficiently at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative flex rounded-lg bg-linear-to-r from-primary to-primary/80 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/70 hover:-translate-y-1 active:translate-y-0 items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="group relative flex rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Server Architecture Visualization */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Database size={32} className="text-white" />
                </div>
                <div className="text-sm text-gray-300">Database</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 relative">
                  <Server size={40} className="text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm text-gray-300">Backend Server</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Cloud size={32} className="text-white" />
                </div>
                <div className="text-sm text-gray-300">Cloud</div>
              </div>
            </div>
          </div>
          
          {/* Connection Lines */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-blue-400"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-24 h-0.5 bg-green-400"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-12 h-0.5 bg-purple-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Technologies We Use</h2>
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

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Key Features of Our Backend Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-600" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Approach */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.map((step) => {
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

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Backend Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div key={idx} className="text-center">
                <Icon size={64} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* System Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Backend in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage1}
              alt="Backend Preview 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage2}
              alt="Backend Preview 2"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Why Choose ActroTech</h2>
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

      {/* Call to Action */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">Build Robust Backend Systems with ActroTech</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
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