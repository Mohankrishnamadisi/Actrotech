'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { supabase } from '@/lib/supabaseClient';
import { showSuccess, showError, confirmCareerNote } from '@/lib/alerts';
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
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';
import Button from '@/components/Common/Button';
import SectionTitle from '@/components/Common/SectionTitle';
import { applyForJob, getJobs } from '@/lib/services';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSocialFollowSection, setShowSocialFollowSection] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    resume_url: '',
  });

  const openSocialLink = (url: string) => {
    if (typeof window !== 'undefined' && url) {
      window.open(url, '_blank');
    }
  };
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'full stack', label: 'Full Stack' },
    { value: 'devops', label: 'DevOps' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'data', label: 'Data' },
    { value: 'ai/ml', label: 'AI/ML' },
    { value: 'mobile', label: 'Mobile' },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      setJobsLoading(true);
      try {
        const jobsFromDb = await getJobs();
        const normalizedJobs = (jobsFromDb || []).map((job: any) => ({
          id: job.id,
          title: job.title,
          experience: job.experience,
          location: job.location,
          skills: Array.isArray(job.skills) ? job.skills : [],
          isNew: job.is_new || false,
          applicants: Number.isFinite(job.Applicants) ? job.Applicants : 0,
          created_at: job.created_at,
        }));
        setJobs(normalizedJobs);
      } catch (error) {
        console.error('Failed to fetch jobs from Supabase:', error);
        setJobs([]);
      } finally {
        setJobsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const matchesSearch = (job: any) => {
    const normalized = searchTerm.toLowerCase();
    return (
      job.title?.toLowerCase().includes(normalized) ||
      job.location?.toLowerCase().includes(normalized) ||
      (Array.isArray(job.skills) && job.skills.some((skill: string) => skill.toLowerCase().includes(normalized)))
    );
  };

  const matchesFilter = (job: any) => {
    if (filterType === 'all') return true;
    return job.title?.toLowerCase().includes(filterType.toLowerCase());
  };

  const filteredJobs = jobs.filter(job => matchesSearch(job) && matchesFilter(job));
  const jobsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / jobsPerPage));
  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handleApplyClick = async () => {
    const message = "Note: This position is offered through a third-party payroll company. The selected candidate will be deployed to work on projects with a leading MNC client.";
    const result = await confirmCareerNote(message);
    if (result.isConfirmed) {
      setIsModalOpen(true);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplicationForm({ ...applicationForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!applicationForm.name || !applicationForm.email || !applicationForm.phone || !applicationForm.role) {
      showError('All fields are required');
      return;
    }

    if (!resumeFile) {
      showError('Resume file is required');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      showError('Resume must be PDF, DOC, or DOCX');
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (resumeFile.size > maxSize) {
      showError('Resume must be less than 5MB');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(applicationForm.email)) {
      showError('Invalid email');
      return;
    }
    if (!/^\d{10}$/.test(applicationForm.phone)) {
      showError('Invalid phone number (10 digits)');
      return;
    }

    const { data: existingApplications, error: existingError } = await supabase
      .from('job_applications')
      .select('id')
      .or(`email.eq.${applicationForm.email},phone.eq.${applicationForm.phone}`)
      .limit(1);

    if (existingError) {
      console.error('Error checking duplicate application:', existingError);
      showError('Unable to verify application status. Please try again later.');
      return;
    }

    if (existingApplications && existingApplications.length > 0) {
      showError('You have already applied for this job');
      return;
    }

    setLoading(true);

    try {
      const ext = resumeFile.name.split('.').pop() || 'pdf';
      const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;
      const filePath = `${fileName}`; // no bucket prefix
      console.log('Resume upload start', { fileName, filePath, type: resumeFile.type, size: resumeFile.size });

      const { error: uploadError } = await supabase.storage.from('resumes').upload(filePath, resumeFile, {
        contentType: resumeFile.type,
      });

      if (uploadError) {
        console.error('Resume upload failed', uploadError);
        showError('Resume upload failed. Please try again.');
        return;
      }

      console.log('Resume uploaded successfully', { filePath });

      const { data: publicData } = await supabase.storage.from('resumes').getPublicUrl(filePath);
      if (!publicData?.publicUrl) {
        console.error('Failed to get public URL', publicData);
        showError('Could not generate resume URL. Please try again.');
        return;
      }

      const resumeUrl = publicData.publicUrl;
      if (!resumeUrl) {
        console.error('Could not get public URL from storage', publicData);
        showError('Could not generate resume URL. Please try again.');
        return;
      }

      console.log('Got resume public URL', { resumeUrl });

      console.log('Job application DB insert start', { name: applicationForm.name, email: applicationForm.email, role: applicationForm.role, phone: applicationForm.phone, resumeUrl });
      await applyForJob(applicationForm.name, applicationForm.email, applicationForm.phone, applicationForm.role, resumeUrl);
      console.log('Job application DB insert success');
      showSuccess('Application submitted successfully!');
      setShowSocialFollowSection(true);
      setShowSocialModal(true);

      setApplicationForm({ name: '', email: '', phone: '', role: '', resume_url: '' });
      setResumeFile(null);
      setIsModalOpen(false);
    } catch (error) {
      showError('Failed to submit application');
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
              <button onClick={() => {
    document.getElementById("openings")?.scrollIntoView({
      behavior: "smooth",
    });
  }}className="group relative flex rounded-lg bg-linear-to-r from-primary to-primary/80 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/70 hover:-translate-y-1 active:translate-y-0 items-center gap-2 cursor-pointer">
                View Open Positions <ArrowRight size={20} />
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

      {showSocialFollowSection && (
        <section className="py-12 lg:py-16 bg-blue-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-2xl border border-blue-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-slate-800">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Application Submitted Successfully 🎉</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Thank you for applying. We’ll be in touch soon.</p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">🚀 Stay Ahead – Get Job Updates Instantly</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Follow Actrotech to get instant job alerts and apply early to increase your chances.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">                  
                  <button
                    onClick={() => openSocialLink('https://www.facebook.com/people/Actrotech-Solutions-Pvt-Ltd/61578411107498/')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500 bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-800"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </button>
                  <button
                    onClick={() => openSocialLink('https://www.instagram.com/actrotech_solutions/')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-400 bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-pink-600"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </button>
                  
                  <button
                    onClick={() => openSocialLink('https://www.linkedin.com/company/112563284')}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </button>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Most jobs get filled quickly – don’t miss out ⏳</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

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
      <section id="openings" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
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
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  }`}
                />
              </div>
              <div className="w-full md:w-64">
                <label htmlFor="categoryFilter" className="sr-only">Filter category</label>
                <select
                  id="categoryFilter"
                  value={filterType}
                  onChange={(e) => {
                    setFilterType(e.target.value);
                    setCurrentPage(1);
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          {/* New Openings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-3 text-center flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              New Openings
            </h3>
            <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-blue-200 bg-blue-50/70 p-5 text-center leading-relaxed shadow-xl dark:border-blue-900 dark:bg-blue-950/30">
              <div className="flex items-center justify-center gap-3 text-sm font-semibold text-blue-700 dark:text-blue-300">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-200/80 text-blue-700 dark:bg-blue-600/30 dark:text-blue-200">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                  </svg>
                </span>
                <span>Important: Third-party payroll role; deployment on MNC client projects.</span>
              </div>
            </div>

            {jobsLoading ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white/70 px-8 py-16 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-300">
                <p className="text-xl font-semibold mb-2">Loading jobs...</p>
                <p className="max-w-xl mx-auto text-sm leading-6">
                  Please wait while we fetch the latest openings.
                </p>
              </div>
            ) : currentJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white/70 px-8 py-16 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-300">
                <p className="text-xl font-semibold mb-2">No jobs found</p>
                <p className="max-w-xl mx-auto text-sm leading-6">
                  Try a different keyword or category to discover more opportunities.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentJobs.map((job, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-2 ${
                        isDark
                          ? 'bg-gray-800/50 border-gray-700 hover:border-green-500'
                          : 'bg-white border-gray-200 hover:border-green-400 shadow-lg'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-green-600/20' : 'bg-green-100'}`}>
                            <Briefcase className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                          </div>
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/70 dark:text-blue-200">
                            Applicants: {job.applicants ?? 0}+
                          </span>
                        </div>
                        {job.isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            NEW
                          </span>
                        )}
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
                      <Button onClick={handleApplyClick} variant="primary" className="w-full justify-center py-3 text-sm gap-2 cursor-pointer">
                        Apply Now <ArrowRight size={16} />
                      </Button>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {Array.from({ length: totalPages }, (_, pageIndex) => {
                      const pageNumber = pageIndex + 1;
                      return (
                        <button
                          key={pageNumber}
                          type="button"
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`min-w-[44px] rounded-xl border px-4 py-2 text-sm font-medium transition ${
                            currentPage === pageNumber
                              ? 'bg-blue-600 text-white border-blue-600'
                              : isDark
                              ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            )}
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
            <button onClick={handleApplyClick} className="bg-white text-blue-600 cursor-pointer hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
              Apply Now <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white cursor-pointer hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 mx-auto">
              Contact HR
            </button>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35 }}
            className={`relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/25 w-full max-w-lg ${isDark ? 'bg-slate-900/90' : 'bg-white/95'}`}
            style={{ maxHeight: '88vh', overflowY: 'auto' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,108,247,0.15),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))]" />
            <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10">
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">Apply for Job</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleFormChange}
                    className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-800 placeholder-slate-500'}`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleFormChange}
                    className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-800 placeholder-slate-500'}`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleFormChange}
                    className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-800 placeholder-slate-500'}`}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={applicationForm.role}
                    onChange={handleFormChange}
                    className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-800 placeholder-slate-500'}`}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">Resume (PDF/DOC/DOCX)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      setResumeFile(file);
                    }}
                    className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-800 placeholder-slate-500'}`}
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
          </motion.div>
        </div>
      )}

      {/* Social Follow Modal (optional) */}
      {showSocialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md rounded-2xl border border-white/20 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-slate-900"
          >
            <button
              onClick={() => setShowSocialModal(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-3 text-center text-slate-900 dark:text-white">Join Actrotech Community 🚀</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 text-center">Stay connected with us on social media and be first to know about new roles.</p>
            <div className="flex flex-col gap-3">
                 <button
                onClick={() => openSocialLink('https://www.facebook.com/people/Actrotech-Solutions-Pvt-Ltd/61578411107498/')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-800"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </button>
              
              <button
                onClick={() => openSocialLink('https://www.instagram.com/actrotech_solutions/')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-pink-600"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </button>
           
              <button
                onClick={() => openSocialLink('https://www.linkedin.com/company/112563284')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">Most jobs get filled quickly – don’t miss out ⏳</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}