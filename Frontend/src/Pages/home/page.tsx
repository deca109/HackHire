"use client"

import AuthPage from '../auth-page/page';
import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Code, BookOpen, Users, Zap, ChevronRight, Briefcase, GraduationCap, ChevronDown, FileText, CheckCircle, Award, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)



  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'}`}>
      <div className={`fixed inset-0 ${isDarkMode ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=")]' : 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2U2ZTZlNiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==")]'} opacity-20`} />
      <div className={`fixed inset-0 ${isDarkMode ? 'bg-gradient-to-br from-transparent via-gray-900 to-black' : 'bg-gradient-to-br from-transparent via-indigo-100 to-purple-200'} opacity-80`} />

      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          <HeroSection isDarkMode={isDarkMode} />
          <FeaturedContentSection isDarkMode={isDarkMode} scrollY={scrollY} />
          <StatsSection isDarkMode={isDarkMode} scrollY={scrollY} />
          <FeaturesSection isDarkMode={isDarkMode} scrollY={scrollY} />
          <WhyChooseUsSection isDarkMode={isDarkMode} scrollY={scrollY} />
          <TestimonialSection isDarkMode={isDarkMode} scrollY={scrollY} />
          <CTASection isDarkMode={isDarkMode} />
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

function Header({ isDarkMode, toggleTheme }) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { 
      label: 'Products', 
      items: ['Coding Platform', 'Interview Prep', 'Job Board', 'Learning Paths'] 
    },
    { 
      label: 'Solutions', 
      items: ['For Developers', 'For Companies', 'For Universities', 'For Bootcamps'] 
    },
    { 
      label: 'Resources', 
      items: ['Blog', 'Tutorials', 'Documentation', 'Community'] 
    },
    { 
      label: 'Pricing', 
      items: ['Individual Plans', 'Team Plans', 'Enterprise Solutions', 'Compare Plans'] 
    },
  ]

  return (
    <motion.header 
      className={`fixed w-full z-20 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-opacity-80 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center space-x-2">
        <Code className={`w-8 h-8 ${isDarkMode ? 'text-teal-400' : 'text-indigo-600'}`} />
        <span className="text-xl font-bold font-neue-machina">HackerHub</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`text-sm font-medium hover:text-indigo-500 transition-colors flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {item.label}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <AnimatePresence>
              {activeDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 overflow-hidden`}
                  style={{ transformOrigin: 'top' }}
                >
                  <div className="py-1">
                    {item.items.map((subItem, subIndex) => (
                      <motion.a
                        key={subIndex}
                        href="#"
                        className={`block px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-indigo-50 text-gray-700'}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                      >
                        {subItem}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={toggleTheme} className={`relative ${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-indigo-200 text-indigo-600'}`}>
          <Sun className={`w-4 h-4 transition-opacity ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
          <Moon className={`w-4 h-4 absolute transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
        </Button>
        <Button  className={isDarkMode ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}>Get Started</Button>
      </div>
    </motion.header>
  )
}

function HeroSection({ isDarkMode }) {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 font-neue-machina"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Redefining Tech Hiring
        </motion.h1>
        <motion.p 
          className={`text-xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-indigo-700'} font-neue-machina`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          It's not a pipeline problem. It's a spotlight problem.
        </motion.p>
        <motion.p 
          className={`text-lg mb-8 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From prepping for jobs and practicing coding to running world-class technical interviews, we give developers the tools they need to showcase their skills, passion, and potential.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className={`${isDarkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-indigo-500 hover:bg-indigo-600'} text-white font-neue-machina`}>
            Start Your Journey <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedContentSection({ isDarkMode, scrollY }) {
  const featuredContent = [
    { icon: <Award className="w-8 h-8" />, title: 'Skill Assessments', description: 'Evaluate your coding skills with our comprehensive assessments.' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Learning Paths', description: 'Follow curated learning paths to advance your tech career.' },
    { icon: <Users className="w-8 h-8" />, title: 'Mentor Connect', description: 'Get guidance from industry experts through our mentorship program.' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Job Matching', description: 'Find the perfect job opportunities tailored to your skills and preferences.' },
  ]

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-neue-machina">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`mb-4 ${isDarkMode ? 'text-teal-400' : 'text-indigo-500'}`}>{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-neue-machina">{item.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection({ isDarkMode, scrollY }) {
  const stats = [
    { label: 'Active Users', value: '100k+' },
    { label: 'Problems Solved', value: '5M+' },
    { label: 'Job Placements', value: '10k+' },
    { label: 'Coding Contests', value: '500+' },
  ]

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'}`}
              style={{
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 255, 255, 0.1), 0 2px 4px -1px rgba(0, 255, 255, 0.06)' : '0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className={`text-4xl font-bold mb-2 font-neue-machina ${isDarkMode ? 'text-teal-400' : 'text-indigo-600'}`}
                initial={{ scale: 0 }}
                animate={{ scale: scrollY > 300 ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 100, delay: index * 0.2 + 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection({ isDarkMode, scrollY }) {
  const features = [
    { icon: <BookOpen className="w-8 h-8" />, title: 'Comprehensive Courses', description: 'From basics to advanced topics, covering all major programming languages and frameworks.' },
    { icon: <Code className="w-8 h-8" />, title: 'Coding Challenges', description: 'Sharpen your skills with our vast collection of coding problems and real-world scenarios.' },
    { icon: <Users className="w-8 h-8" />, title: 'Community Support', description: 'Connect with fellow coders, share knowledge, and grow together in our vibrant community.' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Job Board', description: 'Exclusive job postings from top tech companies looking for talented developers.' },
  ]

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-50 to-indigo-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-neue-machina">What HackerHub Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-indigo-50'}`}
              style={{
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 255, 255, 0.1), 0 2px 4px -1px rgba(0, 255, 255, 0.06)' : '0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollY > 600 ? 1 : 0, y: scrollY > 600 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`mb-4 ${isDarkMode ? 'text-teal-400' : 'text-indigo-500'}`}
                initial={{ rotate: 0 }}
                animate={{ rotate: scrollY > 600 ? 360 : 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 font-neue-machina">{feature.title}</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection({ isDarkMode, scrollY }) {
  const reasons = [
    { icon: <GraduationCap className="w-8 h-8" />, title: 'For Students', description: 'Gain practical skills, prepare for interviews, and kickstart your tech career.' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'For Job Seekers', description: 'Polish your skills, showcase your talent, and connect with top employers.' },
    { icon: <Users className="w-8 h-8" />, title: 'For Recruiters', description: 'Access a pool of pre-vetted, skilled developers ready to join your team.' },
    { icon: <Zap className="w-8 h-8" />, title: 'For Tech Enthusiasts', description: 'Stay updated with the latest in tech, participate in coding contests, and grow your network.' },
  ]

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-neue-machina">Why Choose HackerHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-indigo-50 hover:bg-indigo-100'}`}
              style={{
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 255, 255, 0.1), 0 2px 4px -1px rgba(0, 255, 255, 0.06)' : '0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollY > 1000 ? 1 : 0, y: scrollY > 1000 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`mb-4 ${isDarkMode ? 'text-teal-400' : 'text-indigo-500'}`}
                initial={{ scale: 0 }}
                animate={{ scale: scrollY > 1000 ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 100, delay: index * 0.2 + 0.5 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 font-neue-machina">{reason.title}</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialSection({ isDarkMode, scrollY }) {
  const testimonials = [
    { name: 'Alex J.', role: 'Software Engineer at Google', quote: 'HackerHub was instrumental in helping me land my dream job at Google.' },
    { name: 'Samantha L.', role: 'Full Stack Developer', quote: 'The community support at HackerHub is unparalleled. I learned so much from fellow coders.' },
    { name: 'Michael C.', role: 'Tech Recruiter', quote: 'As a recruiter, HackerHub has been an excellent source of top-tier tech talent.' },
  ]

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-neue-machina">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-indigo-50'}`}
              style={{
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 255, 255, 0.1), 0 2px 4px -1px rgba(0, 255, 255, 0.06)' : '0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollY > 1400 ? 1 : 0, y: scrollY > 1400 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.p 
                className={`mb-4 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollY > 1400 ? 1 : 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="font-semibold font-neue-machina">{testimonial.name}</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection({ isDarkMode }) {
  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-indigo-100'}`}>
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2 
          className="text-3xl font-bold mb-6 font-neue-machina"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Reset Tech Hiring?
        </motion.h2>
        <motion.p 
          className={`text-xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-indigo-700'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join HackerHub today and take the first step towards revolutionizing the tech recruitment process.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className={`${isDarkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-indigo-500 hover:bg-indigo-600'} text-white font-neue-machina`}>
            Get Started Now <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function Footer({ isDarkMode }) {
  const footerSections = [
    {
      title: 'Product',
      links: ['Courses', 'Practice', 'Contests', 'Jobs']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press']
    },
    {
      title: 'Resources',
      links: ['Community', 'Help Center', 'API', 'Status']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy']
    },
  ]

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-900 text-white'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className={`w-8 h-8 ${isDarkMode ? 'text-teal-400' : 'text-indigo-300'}`} />
              <span className="text-xl font-bold font-neue-machina">HackerHub</span>
            </div>
            <p className={isDarkMode ? 'text-gray-400' : 'text-indigo-200'}>Empowering developers to reach their full potential and connect with top opportunities in tech.</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 font-neue-machina">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-indigo-200 hover:text-white'} transition-colors`}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-indigo-800'} text-center ${isDarkMode ? 'text-gray-500' : 'text-indigo-200'}`}>
          <p>&copy; {new Date().getFullYear()} H ackerHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}