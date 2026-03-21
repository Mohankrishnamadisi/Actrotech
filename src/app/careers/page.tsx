'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  Users,
  Rocket,
  Lightbulb,
  HandHeart,
  Globe,
  BookOpen,
  Coffee,
  Search,
  MapPin,
  Clock,
  Award,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Filter,
  Briefcase,
  Star,
} from 'lucide-react';
import Button from '@/components/Common/Button';
import SectionTitle from '@/components/Common/SectionTitle';
import { applyForJob } from '@/lib/services';

const whyWorkWithUs = [
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career advancement paths',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Work Environment',
    description: 'Work with cutting-edge technologies and modern tools',
  },
  {
    icon: HandHeart,
    title: 'Collaborative Culture',
    description: 'Supportive team environment that values your input',
  },
  {
    icon: Globe,
    title: 'Work on Real-world Projects',
    description: 'Impactful projects that solve real business challenges',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Access to training, conferences, and skill development',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours and remote work options available',
  },
];

const newOpenings = [
  {
    title: 'Frontend Developer (React / Vue)',
    experience: '2–5 years',
    location: 'Remote / Hybrid',
    skills: ['HTML', 'CSS', 'JavaScript', 'React/Vue', 'TypeScript'],
    isNew: true,
  },
  {
    title: 'Backend Developer (.NET / Node.js)',
    experience: '3–6 years',
    location: 'Remote / Hybrid',
    skills: ['C#', 'Node.js', 'API Development', 'Databases', 'Microservices'],
    isNew: true,
  },
  {
    title: 'Full Stack Developer',
    experience: '3–7 years',
    location: 'Remote / Hybrid',
    skills: ['React', 'Node.js', 'Databases', 'Cloud', 'DevOps'],
    isNew: true,
  },
];

const oldOpenings = [
  { title: 'UI Developer', experience: '2–4 years' },
  { title: 'QA Engineer', experience: '3–5 years' },
  { title: 'DevOps Engineer', experience: '4–6 years' },
];

const hiringProcess = [
  {
    step: 1,
    title: 'Application Submission',
    description: 'Submit your resume and portfolio through our application form',
  },
  {
    step: 2,
    title: 'Resume Screening',
    description: 'Our HR team reviews applications and shortlists candidates',
  },
  {
    step: 3,
    title: 'Technical Interview',
    description: 'Technical assessment and coding challenges with our development team',
  },
  {
    step: 4,
    title: 'HR Discussion',
    description: 'Cultural fit interview and discussion about your career goals',
  },
  {
    step: 5,
    title: 'Offer Release',
    description: 'Final offer with compensation details and benefits package',
  },
];

const benefits = [
  'Competitive Salary',
  'Flexible Work Hours',
  'Health Benefits',
  'Learning Programs',
  'Paid Leaves',
  'Performance Bonuses',
];

export default function CareersPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const careerImage = isDark ? '/images/new/ca-dark.png' : '/images/new/ca-light.png';
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    resume_url: '',
  });
  const [loading, setLoading] = useState(false);

  const filteredJobs = newOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'all' ||
                         (filterType === 'frontend' && job.title.toLowerCase().includes('frontend')) ||
                         (filterType === 'backend' && job.title.toLowerCase().includes('backend')) ||
                         (filterType === 'fullstack' && job.title.toLowerCase().includes('full stack'));
    return matchesSearch && matchesFilter;
  });

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationForm.name || !applicationForm.email || !applicationForm.phone || !applicationForm.role || !applicationForm.resume_url) {
      toast.error('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(applicationForm.email)) {
      toast.error('Invalid email');
      return;
    }
    if (!/^\d{10}$/.test(applicationForm.phone)) {
      toast.error('Invalid phone number (10 digits)');
      return;
    }
    setLoading(true);
    try {
      await applyForJob(applicationForm.name, applicationForm.email, applicationForm.phone, applicationForm.role, applicationForm.resume_url);
      toast.success('Application submitted successfully!');
      setApplicationForm({ name: '', email: '', phone: '', role: '', resume_url: '' });
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`mt-8 min-h-screen ${isDark ? 'bg-[#0B1120] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
              Join Our Team at ActroTech
            </h1>
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-4">
              "Build your career with a team that values innovation, growth, and excellence."
            </p>
            <p className="text-base leading-relaxed! text-body-color md:text-lg mb-8">
              We are always looking for passionate developers, designers, and problem-solvers to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative flex rounded-lg bg-linear-to-r from-primary to-primary/80 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/70 hover:-translate-y-1 active:translate-y-0 items-center gap-2">
                View Open Positions <ArrowRight size={20} />
              </button>
              <button className="group relative flex rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white" onClick={handleApplyClick}>
                Apply Now
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={careerImage}
              alt="Join ActroTech Team"
              width={500}
              height={400}
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose ActroTech"
            paragraph="Discover what makes ActroTech a great place to work and grow your career"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyWorkWithUs.map((item, index) => (
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
                    <item.icon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Current Openings"
            paragraph="Explore exciting career opportunities and join our innovative team"
            center
          />

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 focus:border-blue-500'
                }`}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('frontend')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  filterType === 'frontend'
                    ? 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setFilterType('backend')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  filterType === 'backend'
                    ? 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setFilterType('fullstack')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  filterType === 'fullstack'
                    ? 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Full Stack
              </button>
            </div>
          </div>

          {/* New Openings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              New Openings
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-2 ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-green-500'
                      : 'bg-white border-gray-200 hover:border-green-400 shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-green-600/20' : 'bg-green-100'}`}>
                      <Briefcase className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{job.title}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button onClick={handleApplyClick} variant="primary" className="w-full justify-center py-3 text-sm gap-2">
                    Apply Now <ArrowRight size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Openings */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-600 dark:text-gray-400">
              Previous Openings
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oldOpenings.map((job, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 opacity-60 ${
                    isDark
                      ? 'bg-gray-800/30 border border-gray-700'
                      : 'bg-gray-100 border border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-600/20' : 'bg-gray-200'}`}>
                      <Briefcase className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>
                    <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">{job.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Clock className="w-4 h-4" />
                    {job.experience}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Position filled</p>
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
            title="Our Hiring Process"
            paragraph="A streamlined process designed to find the best talent and ensure mutual fit"
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

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Benefits & Perks"
            paragraph="We offer competitive compensation and benefits to support your professional and personal growth"
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center transition-all duration-300 hover:transform hover:scale-105 ${
                  isDark ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                }`}
              >
                <CheckCircle className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                <h4 className="font-semibold">{benefit}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Life at ActroTech"
                paragraph=""
                width="100%"
              />
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                At ActroTech, we foster a culture of innovation, collaboration, and continuous learning.
                Our team works on cutting-edge technologies while maintaining a supportive and inclusive environment.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                We believe in work-life balance, professional development, and creating meaningful impact
                through technology. Join us to be part of a team that values creativity, excellence, and mutual respect.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 ${
                        isDark ? 'border-gray-700 bg-gray-600' : 'border-white bg-gray-300'
                      } flex items-center justify-center text-xs font-bold`}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">Join 50+ talented professionals</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-linear-to-br from-blue-600/20 to-purple-600/20' : 'bg-linear-to-br from-blue-100 to-purple-100'}`}>
                <Users className={`w-32 h-32 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight! text-white sm:text-4xl md:text-[45px]">
            Ready to take the next step in your career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join ActroTech and be part of a team that's shaping the future of technology.
            We're always looking for talented individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleApplyClick} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
              Apply Now <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 mx-auto">
              Contact HR
            </button>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Apply for Job</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={applicationForm.name}
                  onChange={handleFormChange}
                  className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={applicationForm.email}
                  onChange={handleFormChange}
                  className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={applicationForm.phone}
                  onChange={handleFormChange}
                  className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Role</label>
                <input
                  type="text"
                  name="role"
                  value={applicationForm.role}
                  onChange={handleFormChange}
                  className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Resume URL</label>
                <input
                  type="url"
                  name="resume_url"
                  value={applicationForm.resume_url}
                  onChange={handleFormChange}
                  className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}