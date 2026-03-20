'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
  Users,
  UserCheck,
  BarChart3,
  Cloud,
  FolderOpen,
  Scale,
  Shield,
  Zap,
  Cpu,
  Headphones,
  ArrowRight,
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Actro CRM',
    description: 'A powerful customer relationship management system to manage leads, sales, and customer interactions.',
    features: ['Lead Management', 'Sales Tracking', 'Customer Insights', 'Email Integration'],
    icon: Users,
  },
  {
    id: 2,
    title: 'Actro HRMS',
    description: 'An advanced HR management system to handle employees, payroll, and attendance.',
    features: ['Employee Records', 'Attendance Tracking', 'Payroll System', 'Leave Management'],
    icon: UserCheck,
  },
  {
    id: 3,
    title: 'Actro Analytics',
    description: 'A real-time analytics platform for data visualization and business intelligence.',
    features: ['Dashboard Reports', 'KPI Tracking', 'Real-time Insights', 'Custom Charts'],
    icon: BarChart3,
  },
  {
    id: 4,
    title: 'Actro Cloud Manager',
    description: 'Cloud infrastructure management solution to deploy and monitor applications.',
    features: ['Cloud Monitoring', 'Auto Deployment', 'Security Controls', 'Resource Scaling'],
    icon: Cloud,
  },
  {
    id: 5,
    title: 'Actro Project Tracker',
    description: 'A project management tool for tracking tasks, teams, and progress.',
    features: ['Task Management', 'Team Collaboration', 'Timeline View', 'Notifications'],
    icon: FolderOpen,
  },
];

const whyChoose = [
  { title: 'Scalable Architecture', icon: Scale },
  { title: 'Secure & Reliable', icon: Shield },
  { title: 'Easy Integration', icon: Zap },
  { title: 'High Performance', icon: Cpu },
  { title: '24/7 Support', icon: Headphones },
];

export default function ProductsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const productImage = isDark ? '/images/new/Product-dark.png' : '/images/new/Product-light.png';

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-2">
              Our Products & Solutions
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Innovative software solutions designed to accelerate business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Explore Products <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={productImage}
              alt="Products"
              width={500}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white border'
                }`}
              >
                <Icon size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <ul className="mb-4 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose ActroTech Products?</h2>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
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