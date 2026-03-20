'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
  Wrench,
  Bug,
  BarChart,
  Shield,
  Headphones,
  Circle,
  Square,
  Star,
  CheckCircle,
  Search,
  AlertTriangle,
  TestTube,
  Rocket,
  Globe,
  Cloud,
  Building,
  ShoppingCart,
  Settings,
  Users,
  Clock,
  Eye,
  Handshake,
  ArrowRight,
} from 'lucide-react';

const whatWeOffer = [
  {
    title: 'Application Maintenance',
    description: 'Regular updates and improvements to keep systems optimized.',
    icon: Wrench,
  },
  {
    title: 'Bug Fixing & Issue Resolution',
    description: 'Quick identification and fixing of bugs and system issues.',
    icon: Bug,
  },
  {
    title: 'Performance Monitoring',
    description: 'Continuous monitoring to ensure optimal performance.',
    icon: BarChart,
  },
  {
    title: 'Security Updates',
    description: 'Protect applications from vulnerabilities and threats.',
    icon: Shield,
  },
  {
    title: 'Technical Support',
    description: 'Dedicated support team for ongoing assistance.',
    icon: Headphones,
  },
];

const supportModels = [
  {
    name: 'Basic Support',
    icon: Circle,
    features: ['Email support', 'Bug fixes', 'Monthly updates'],
    borderColor: 'border-gray-300',
  },
  {
    name: 'Standard Support',
    icon: Square,
    features: ['Priority support', 'Performance monitoring', 'Weekly updates'],
    borderColor: 'border-blue-300',
  },
  {
    name: 'Premium Support',
    icon: Star,
    features: ['24/7 Support', 'Dedicated team', 'Real-time monitoring', 'Immediate issue resolution'],
    borderColor: 'border-purple-300',
  },
];

const keyFeatures = [
  '24/7 Monitoring',
  'Fast Issue Resolution',
  'System Optimization',
  'Security Enhancements',
  'Regular Backups',
  'Continuous Improvements',
];

const process = [
  {
    step: 1,
    title: 'System Analysis',
    description: 'Evaluate application performance',
    icon: Search,
  },
  {
    step: 2,
    title: 'Issue Identification',
    description: 'Detect bugs and bottlenecks',
    icon: AlertTriangle,
  },
  {
    step: 3,
    title: 'Fix & Optimization',
    description: 'Resolve issues and optimize',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Ensure system stability',
    icon: TestTube,
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'Apply updates safely',
    icon: Rocket,
  },
  {
    step: 6,
    title: 'Monitoring',
    description: 'Continuous tracking and support',
    icon: BarChart,
  },
];

const useCases = [
  {
    title: 'Web Applications',
    icon: Globe,
  },
  {
    title: 'SaaS Platforms',
    icon: Cloud,
  },
  {
    title: 'Enterprise Systems',
    icon: Building,
  },
  {
    title: 'E-commerce Platforms',
    icon: ShoppingCart,
  },
  {
    title: 'Internal Business Tools',
    icon: Settings,
  },
];

const whyChoose = [
  { title: 'Reliable Support Team', icon: Users },
  { title: 'Fast Response Time', icon: Clock },
  { title: 'Proactive Monitoring', icon: Eye },
  { title: 'Secure Systems', icon: Shield },
  { title: 'Long-term Partnership', icon: Handshake },
];

export default function MaintenanceSupportPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const supportImage = isDark ? '/images/new/ui-dark.png' : '/images/new/ui-light.png';
  const previewImage1 = isDark ? '/images/new/ui-preview-dark.png' : '/images/new/ui-preview-light.png';
  const previewImage2 = isDark ? '/images/new/ui-preview-light.png' : '/images/new/ui-preview-dark.png';

  return (
    <div className={`mt-8min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Maintenance & Support Services
            </h1>
            <p className="text-lg lg:text-xl mb-4 text-gray-600 dark:text-gray-300">
              We ensure your applications run smoothly, securely, and efficiently with continuous monitoring and support.
            </p>
            <p className="text-base mb-8 text-gray-600 dark:text-gray-300">
              Our dedicated maintenance and support services help you minimize downtime, fix issues quickly, and keep your systems up-to-date with the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Get Support <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={supportImage}
              alt="Maintenance & Support"
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

      {/* Support Models */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Support Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } ${model.borderColor}`}
              >
                <Icon size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{model.name}</h3>
                <ul className="space-y-2">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Maintenance Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Process</h2>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Where We Help</h2>
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

      {/* Support Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Support in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage1}
              alt="Support Preview 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage2}
              alt="Support Preview 2"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose ActroTech</h2>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Keep Your Applications Running Smoothly with ActroTech</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Support
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