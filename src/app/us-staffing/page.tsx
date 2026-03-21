'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Button from '@/components/Common/Button';
import {
  Users,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  UserCheck,
  Globe,
  Award,
  Shield,
  TrendingUp,
  Star,
  Building,
  Zap,
} from 'lucide-react';
import SectionTitle from '@/components/Common/SectionTitle';

const staffingServices = [
  {
    title: 'Contract Staffing',
    description: 'Hire professionals on a short-term or project basis.',
    icon: Briefcase,
  },
  {
    title: 'Full-time Hiring',
    description: 'Find permanent employees who fit your company culture.',
    icon: UserCheck,
  },
  {
    title: 'Contract-to-Hire',
    description: 'Evaluate candidates before making full-time decisions.',
    icon: Clock,
  },
  {
    title: 'Remote Staffing',
    description: 'Access global talent working remotely.',
    icon: Globe,
  },
];

const roles = [
  'Frontend Developers (React, Vue, Angular)',
  'Backend Developers (.NET, Node.js, Java)',
  'Full Stack Developers',
  'DevOps Engineers',
  'QA/Test Engineers',
  'UI/UX Designers',
  'Data Analysts',
];

const hiringProcess = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Understand client needs and job requirements',
  },
  {
    step: 2,
    title: 'Candidate Sourcing',
    description: 'Find best-fit candidates from our talent pool',
  },
  {
    step: 3,
    title: 'Screening & Evaluation',
    description: 'Technical and HR screening of candidates',
  },
  {
    step: 4,
    title: 'Interview Coordination',
    description: 'Schedule and coordinate interviews',
  },
  {
    step: 5,
    title: 'Selection & Onboarding',
    description: 'Finalize selection and onboard candidates',
  },
];

const whyChooseUs = [
  'Quick Hiring Process',
  'Access to Top Talent',
  'Industry Expertise',
  'Flexible Hiring Models',
  'Dedicated Support',
];

const clientBenefits = [
  'Reduced Hiring Time',
  'Cost-effective Solutions',
  'Skilled Professionals',
  'Scalable Workforce',
  'Reliable Support',
];

export default function USStaffingPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const staffingImage = isDark ? '/images/new/us-dark.png' : '/images/new/us-light.png';

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
              US IT Staffing Services
            </h1>
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-4">
              "Connecting top talent with leading organizations across the United States."
            </p>
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-8">
              ActroTech provides reliable and scalable IT staffing solutions to help businesses find the right talent quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full max-w-60 justify-center px-8 py-4 gap-2">
                Hire Talent <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" className="w-full max-w-60 justify-center px-8 py-4">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={staffingImage}
              alt="US IT Staffing Services"
              width={500}
              height={400}
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About US Staffing */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What is US Staffing?"
            paragraph=""
            center
          />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-6">
              Our US Staffing services focus on providing highly skilled IT professionals to companies across various industries. We help organizations scale their teams by delivering the right talent at the right time, ensuring productivity and success.
            </p>
            <p className="text-base leading-relaxed! text-body-color md:text-lg">
              With a strong network of qualified candidates and industry expertise, we streamline the hiring process and reduce time-to-hire.
            </p>
          </div>
        </div>
      </section>

      {/* Our Staffing Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Staffing Solutions"
            paragraph="Flexible hiring models designed to meet your business needs"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {staffingServices.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-blue-500'
                    : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-blue-300 shadow-lg'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
                    <service.icon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Roles */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Roles We Hire For"
            paragraph="We provide skilled professionals across various IT domains"
            center
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                    isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <span className="font-medium">{role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Recruitment Process"
            paragraph="A streamlined process to find the perfect candidates for your team"
            center
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-5 gap-8">
              {hiringProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-bold ${
                    isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                  {index < hiringProcess.length - 1 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full h-0.5 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-300'
                    }`} style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ActroTech */}
      <section className="py-16 lg:py-24 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Us"
            paragraph="What sets ActroTech apart in the staffing industry"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-all duration-300 hover:transform hover:scale-105 ${
                  isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                }`}
              >
                <CheckCircle className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                <h4 className="font-semibold">{reason}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Client Benefits"
            paragraph="The advantages of partnering with ActroTech for your staffing needs"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {clientBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg text-center transition-all duration-300 hover:transform hover:scale-105 ${
                  isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-lg border border-gray-200'
                }`}
              >
                <Award className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h4 className="text-lg font-semibold mb-2">{benefit}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit === 'Reduced Hiring Time' && 'Save weeks of recruitment effort with our efficient process'}
                  {benefit === 'Cost-effective Solutions' && 'Competitive rates with no hidden fees'}
                  {benefit === 'Skilled Professionals' && 'Pre-vetted candidates with proven expertise'}
                  {benefit === 'Scalable Workforce' && 'Flexible staffing solutions that grow with your needs'}
                  {benefit === 'Reliable Support' && 'Dedicated account managers and 24/7 assistance'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Talent in Action"
            paragraph="See how our professionals deliver exceptional results"
            center
          />
          <div className="max-w-6xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <Image
                  src="/images/new/ui-preview-dark.png"
                  alt="Talent Showcase Dark"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/new/ui-preview-light.png"
                  alt="Talent Showcase Light"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Find the Right Talent for Your Business
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with ActroTech to access top-tier IT professionals and scale your team efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
              Hire Now <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 mx-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}