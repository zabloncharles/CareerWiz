import { motion } from 'framer-motion';
import {
  BsGithub,
  BsArrowRight,
  BsCheckCircle,
  BsGlobe,
  BsThreeDots,
  BsStarFill,
  BsLinkedin,
} from 'react-icons/bs';
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaChartLine,
  FaUsers,
  FaRegFileAlt,
} from 'react-icons/fa';
import { SiTypescript, SiRuby, SiCss3 } from 'react-icons/si';
import Link from 'next/link';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface StyledComponentProps {
  children: ReactNode;
  className?: string;
}

interface LogoProps {
  children: ReactNode;
  className?: string;
}

const HomeLayout = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  };

  const resumeFeatures = [
    { name: 'ATS-Friendly', icon: <BsCheckCircle /> },
    { name: 'Templates', icon: <FaHtml5 /> },
    { name: 'AI-Powered', icon: <SiTypescript /> },
    { name: 'PDF Export', icon: <FaReact /> },
    { name: 'Custom Design', icon: <SiCss3 /> },
  ];

  const stats = [
    { icon: <FaUsers />, value: '100K+', label: 'Active Users' },
    { icon: <FaRegFileAlt />, value: '500K+', label: 'Resumes Created' },
    { icon: <FaChartLine />, value: '78%', label: 'Success Rate' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Google',
      image: '/avatars/avatar1.jpg',
      text: 'CareerCraft helped me land my dream job at Google. The AI-powered suggestions were incredibly helpful!',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Microsoft',
      text: 'The templates are modern and professional. I received multiple interview calls within a week.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Apple',
      text: 'The ATS optimization feature is a game-changer. Highly recommend for any job seeker!',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
    >
      <MainContainer>
        <WavePattern />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Navbar>
            <NavContainer>
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center space-x-2">
                  <Logo>CareerCraft</Logo>
                </Link>
                <NavLinks>
                  <Link href="/templates" className="nav-link">
                    Templates
                    <span className="nav-arrow">▼</span>
                  </Link>
                  <Link href="/features" className="nav-link">
                    Features
                    <span className="nav-arrow">▼</span>
                  </Link>
                  <Link href="/examples" className="nav-link">
                    Examples
                  </Link>
                  <Link href="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </NavLinks>
              </div>

              <NavActions>
                <button className="nav-globe">
                  <BsGlobe className="w-5 h-5" />
                </button>
                <Link href="/login">
                  <button className="nav-login">Sign In</button>
                </Link>
                <Link href="/builder">
                  <button className="nav-cta">Create Resume</button>
                </Link>
              </NavActions>
            </NavContainer>
          </Navbar>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="container mx-auto"
          >
            <motion.div className="max-w-6xl mx-auto" {...fadeIn}>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-left">
                  <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                    <span className="text-white">Create Your</span>
                    <br />
                    <span className="text-white">Professional</span>
                    <br />
                    <span className="gradient-text">Resume Today</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Build an ATS-friendly resume in minutes with our AI-powered builder. Stand out
                    from the crowd and land your dream job faster.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/builder">
                      <button className="btn-primary flex items-center justify-center gap-2">
                        Build Your Resume
                        <BsArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <FloatingCard className="bg-opacity-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-lg font-medium">R</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Resume Preview</h3>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                              ATS-Optimized
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white">
                        <BsThreeDots className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="mb-4">
                          <h4 className="text-sm text-gray-400 mb-2">TEMPLATE FEATURES</h4>
                          <div className="flex flex-wrap gap-2">
                            {resumeFeatures.map((feature, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm flex items-center gap-2"
                              >
                                {feature.icon}
                                {feature.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 4V20M20 12H4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Choose Template
                      </button>
                    </div>
                  </FloatingCard>

                  <FloatingCard className="bg-opacity-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Resume Sections</h3>
                      <div className="text-green-400 text-sm">5/5</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Professional Summary</span>
                        <BsCheckCircle className="text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Work Experience</span>
                        <BsCheckCircle className="text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Education</span>
                        <BsCheckCircle className="text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Skills</span>
                        <BsCheckCircle className="text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Projects</span>
                        <BsCheckCircle className="text-green-400" />
                      </div>
                    </div>
                  </FloatingCard>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card hover-lift text-center p-8"
                >
                  <div className="text-4xl mb-4 text-purple-500 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Graph Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-6"
                >
                  Boost Your <span className="gradient-text">Career Growth</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 mb-8"
                >
                  Our AI-powered platform analyzes successful career trajectories to help you make
                  informed decisions.
                </motion.p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">Resume Impact</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">ATS Success</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
                        style={{ width: '78%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">Interview Rate</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <FloatingCard className="p-8">
                  <div className="relative h-64">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      {/* Grid lines */}
                      <g className="grid-lines text-white/10">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <line
                            key={`h-${i}`}
                            x1="0"
                            y1={i * 50}
                            x2="400"
                            y2={i * 50}
                            stroke="currentColor"
                            strokeDasharray="4 4"
                          />
                        ))}
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <line
                            key={`v-${i}`}
                            x1={i * 57}
                            y1="0"
                            x2={i * 57}
                            y2="200"
                            stroke="currentColor"
                            strokeDasharray="4 4"
                          />
                        ))}
                      </g>

                      {/* Line chart */}
                      <path
                        d="M50 190 C100 190, 130 160, 150 150 S200 120, 250 80 S300 60, 350 50"
                        fill="none"
                        stroke="url(#line-gradient)"
                        strokeWidth="3"
                        className="drop-shadow-lg"
                      />

                      {/* Data points */}
                      {[
                        { x: 50, y: 190 },
                        { x: 150, y: 150 },
                        { x: 250, y: 80 },
                        { x: 350, y: 50 },
                      ].map((point, i) => (
                        <g key={i}>
                          <circle cx={point.x} cy={point.y} r="6" className="fill-purple-500" />
                          <circle cx={point.x} cy={point.y} r="4" className="fill-white" />
                        </g>
                      ))}

                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#7C3AED" />
                        </linearGradient>
                        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Area fill under the line */}
                      <path
                        d="M50 190 C100 190, 130 160, 150 150 S200 120, 250 80 S300 60, 350 50 V200 H50 Z"
                        fill="url(#area-gradient)"
                      />
                    </svg>

                    {/* Labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-400 px-4">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>Jun</span>
                      <span>Dec</span>
                    </div>
                    <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between text-sm text-gray-400 py-4">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              What Our Users <span className="gradient-text">Say</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card hover-lift p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.text}</p>
                  <div className="mt-4 flex gap-1 text-yellow-500">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <Logo className="mb-6">CareerCraft</Logo>
                <p className="text-gray-400">
                  Build your future with our AI-powered resume builder.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <BsLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <BsGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-6">Product</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-6">Company</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} CareerCraft. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </MainContainer>
    </motion.div>
  );
};

export default HomeLayout;

const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #0f1629;
`;

const WavePattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 50%, rgba(76, 29, 149, 0.1) 0%, transparent 50%);
  pointer-events: none;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1rem;
  pointer-events: none;

  > div {
    pointer-events: auto;
  }
`;

const NavContainer = styled.div<StyledComponentProps>`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  will-change: transform;
`;

const Logo = styled.div<LogoProps>`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${(props) => props.className && `className: ${props.className};`}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  .nav-link {
    color: #fff;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .nav-arrow {
      font-size: 0.6rem;
      opacity: 0.5;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .nav-globe {
    color: #fff;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .nav-login {
    color: #fff;
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .nav-cta {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

const FloatingCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  will-change: transform;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
