'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import {
  Code,
  Building,
  Cloud,
  BarChart3,
  ShoppingCart,
  CheckCircle,
  Users,
  Cpu,
  Layers,
  Palette,
  TestTube,
  Rocket,
  ArrowRight,
  Database,
  Server,
} from 'lucide-react';

const whatWeBuild = [
  {
    title: 'Custom Web Applications',
    description: 'Tailor-made solutions designed specifically for your business workflows.',
    icon: Code,
  },
  {
    title: 'Enterprise Applications',
    description: 'Large-scale systems with high performance and scalability.',
    icon: Building,
  },
  {
    title: 'SaaS Platforms',
    description: 'Cloud-based applications with subscription models.',
    icon: Cloud,
  },
  {
    title: 'Admin Dashboards',
    description: 'Powerful dashboards for data management and analytics.',
    icon: BarChart3,
  },
  {
    title: 'E-commerce Applications',
    description: 'Secure and scalable online shopping platforms.',
    icon: ShoppingCart,
  },
];

const technologies = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
  Frameworks: ['Vue.js', 'React.js', 'Angular'],
  Backend: ['Node.js', '.NET Core'],
  APIs: ['REST', 'GraphQL'],
  Database: ['MongoDB', 'MySQL'],
  Cloud: ['AWS', 'Azure'],
};

const keyFeatures = [
  'High Performance & Speed',
  'Scalable Architecture',
  'Secure Authentication (JWT)',
  'API Integration',
  'Responsive Design',
  'Cross-browser Compatibility',
  'Clean Code Structure',
];

const process = [
  {
    step: 1,
    title: 'Requirement Gathering',
    description: 'Understanding business goals and user needs',
    icon: Users,
  },
  {
    step: 2,
    title: 'Planning & Architecture',
    description: 'Designing scalable system architecture',
    icon: Layers,
  },
  {
    step: 3,
    title: 'UI/UX Design',
    description: 'Creating intuitive user experiences',
    icon: Palette,
  },
  {
    step: 4,
    title: 'Development',
    description: 'Building frontend & backend',
    icon: Code,
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Ensuring quality and performance',
    icon: TestTube,
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Launching production-ready applications',
    icon: Rocket,
  },
];

const whyChoose = [
  { title: 'Experienced Developers', icon: Users },
  { title: 'Modern Technologies', icon: Cpu },
  { title: 'Scalable Solutions', icon: Layers },
  { title: 'On-time Delivery', icon: Rocket },
  { title: 'Dedicated Support', icon: Server },
];

export default function WebApplicationDevelopmentPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const webAppImage = isDark ? '/images/new/ui-dark.png' : '/images/new/ui-light.png';
  const previewImage1 = isDark ? '/images/new/ui-preview-dark.png' : '/images/new/ui-preview-light.png';
  const previewImage2 = isDark ? '/images/new/ui-preview-light.png' : '/images/new/ui-preview-dark.png'; // Alternate for variety

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Web Application Development
            </h1>
            <p className="text-lg lg:text-xl mb-4 text-gray-600 dark:text-gray-300">
              We build scalable, secure, and high-performance web applications tailored to your business needs.
            </p>
            <p className="text-base mb-8 text-gray-600 dark:text-gray-300">
              From startups to enterprise platforms, we deliver robust web applications that are fast, reliable, and user-friendly.
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
          <div className="flex justify-center">
            <Image
              src={webAppImage}
              alt="Web Application Development"
              width={500}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeBuild.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white border'
                }`}
              >
                <Icon size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Technologies & Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 border'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Key Features of Our Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-600" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Development Process</h2>
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

      {/* UI Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Sample Web Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage1}
              alt="Web App Preview 1"
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={previewImage2}
              alt="Web App Preview 2"
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Your Next Web Application</h2>
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