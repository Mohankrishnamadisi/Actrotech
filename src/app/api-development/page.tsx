'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
  Code,
  Layers,
  Zap,
  RefreshCw,
  Radio,
  CheckCircle,
  Users,
  FileText,
  TestTube,
  BookOpen,
  Rocket,
  Smartphone,
  Globe,
  CreditCard,
  Database,
  Cpu,
  Shield,
  Headphones,
  ArrowRight,
} from 'lucide-react';

const whatWeOffer = [
  {
    title: 'REST API Development',
    description: 'Design and develop scalable RESTful APIs.',
    icon: Code,
  },
  {
    title: 'Microservices Architecture',
    description: 'Build modular and independently deployable services.',
    icon: Layers,
  },
  {
    title: 'Third-party API Integration',
    description: 'Integrate external services like payment gateways, CRM, etc.',
    icon: Zap,
  },
  {
    title: 'API Modernization',
    description: 'Upgrade legacy systems into modern API-driven architecture.',
    icon: RefreshCw,
  },
  {
    title: 'Real-time APIs',
    description: 'Develop real-time data APIs using WebSockets.',
    icon: Radio,
  },
];

const technologies = [
  'Node.js',
  '.NET Core',
  'Express.js',
  'MongoDB / MySQL',
  'REST / GraphQL',
  'JWT Authentication',
  'Swagger / Postman',
];

const keyFeatures = [
  'High Performance',
  'Scalable Architecture',
  'Secure Authentication & Authorization',
  'Data Encryption',
  'Error Handling & Logging',
  'Version Control (API Versioning)',
  'Rate Limiting & Throttling',
];

const process = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Understand system needs and integrations',
    icon: Users,
  },
  {
    step: 2,
    title: 'API Design',
    description: 'Define endpoints, request/response models',
    icon: FileText,
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build secure and scalable APIs',
    icon: Code,
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Unit testing, integration testing',
    icon: TestTube,
  },
  {
    step: 5,
    title: 'Documentation',
    description: 'Provide clear API documentation',
    icon: BookOpen,
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Deploy APIs with monitoring',
    icon: Rocket,
  },
];

const useCases = [
  {
    title: 'Mobile App Backend APIs',
    icon: Smartphone,
  },
  {
    title: 'Web Application APIs',
    icon: Globe,
  },
  {
    title: 'Payment Gateway Integration',
    icon: CreditCard,
  },
  {
    title: 'Third-party Integrations',
    icon: Zap,
  },
  {
    title: 'Data Processing Systems',
    icon: Database,
  },
];

const whyChoose = [
  { title: 'Strong Backend Expertise', icon: Users },
  { title: 'Secure API Design', icon: Shield },
  { title: 'Scalable Systems', icon: Layers },
  { title: 'Fast Development', icon: Zap },
  { title: 'Long-term Support', icon: Headphones },
];

export default function APIDevelopmentPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const apiImage = isDark ? '/images/new/api-dark.png' : '/images/new/api-light.png';
  const previewImage1 = isDark ? '/images/new/ui-preview-dark.png' : '/images/new/ui-preview-light.png';
  const previewImage2 = isDark ? '/images/new/ui-preview-light.png' : '/images/new/ui-preview-dark.png';

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section - Code-Focused Layout */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  API Development
                </span>
                <h1 className="mb-4 text-3xl font-bold leading-tight! text-white sm:text-4xl md:text-[45px]">
                  Build Powerful APIs
                </h1>
                <p className="text-base leading-relaxed! text-gray-300 md:text-lg mb-4">
                  We build secure, scalable, and high-performance APIs that power modern applications and integrations.
                </p>
                <p className="text-base leading-relaxed! text-gray-300 md:text-lg mb-8">
                  From RESTful APIs to microservices architecture, we design robust backend communication layers that ensure seamless data exchange between systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    Start Your Project <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} font-mono text-sm shadow-lg`}>
                <div className="text-green-400 mb-2">// API Endpoint Example</div>
                <div className="text-blue-400">GET /api/users</div>
                <div className="text-gray-400 ml-4">Authorization: Bearer token</div>
                <div className="text-gray-400 ml-4">Content-Type: application/json</div>
                <div className="text-green-400 mt-4 mb-2">// Response</div>
                <div className="text-yellow-400">{'{'} "status": "success", "data": [...] {'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Technical Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeOffer.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-600 ${
                  isDark ? 'bg-gray-800' : 'bg-white border'
                }`}
              >
                <div className="flex items-center mb-4">
                  <Icon size={32} className="text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">{offer.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{offer.description}</p>
                <div className={`p-3 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-50'} font-mono text-xs text-gray-600 dark:text-gray-400`}>
                  {idx === 0 && 'GET /api/resources'}
                  {idx === 1 && 'POST /api/services'}
                  {idx === 2 && 'PUT /api/integrations'}
                  {idx === 3 && 'PATCH /api/legacy'}
                  {idx === 4 && 'WS /api/realtime'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies - Code Blocks */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Technologies & Tools</h2>
          <div className="max-w-4xl mx-auto">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg font-mono text-sm`}>
              <div className="text-green-400 mb-4">// Our Tech Stack</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`px-3 py-2 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-blue-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer`}>
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Key Features of Our APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-600" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Our API Development Process</h2>
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

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">API Use Cases</h2>
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

      {/* Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">API in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage1}
              alt="API Preview 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage2}
              alt="API Preview 2"
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
          <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">Build Powerful APIs with ActroTech</h2>
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