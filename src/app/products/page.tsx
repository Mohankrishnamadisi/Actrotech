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
import NewsLatterBox from '@/components/Contact/NewsLatterBox';
import { scrollToSection } from '@/lib/scroll';

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
      {/* Hero Section - Centered Layout */}
      <section data-animate className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Products & Solutions
          </h1>
          <p className="text-base leading-relaxed! text-body-color md:text-lg mb-8 max-w-2xl mx-auto">
            Innovative software solutions designed to accelerate business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('products-list')}
              className="group relative flex rounded-lg bg-linear-to-r from-primary to-primary/80 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/70 hover:-translate-y-1 active:translate-y-0 items-center gap-2 cursor-pointer"
            >
              Explore Products <ArrowRight size={20} />
            </button>
            <a href="/contact" className="group relative flex rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
              Contact Us
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src={productImage}
              alt="Products"
              width={600}
              height={400}
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Showcase - Alternating Layout */}
      <section id="products-list" data-animate className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Our Products</h2>
        <div className="space-y-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                  <Icon size={64} className="text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{product.description}</p>
                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
                <div className={`${isEven ? 'lg:col-start-2' : ''} flex justify-center`}>
                  <div className={`w-64 h-64 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center shadow-lg`}>
                    <Icon size={80} className="text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section - Card Grid */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">Why Choose ActroTech Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action - Split Layout */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">Ready to Transform Your Business?</h2>
              <p className="text-base leading-relaxed! md:text-lg mb-8 text-blue-100">
                Join thousands of businesses that trust ActroTech products for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Get Started
                </button>
                <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-blue-100">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm text-blue-100">Products</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLatterBox />
    </div>
  );
}