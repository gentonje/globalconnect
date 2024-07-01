"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Menu, X, Linkedin, ChevronLeft, ChevronRight, Code, Book, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Docs', 'Learn', 'Blog', 'Community'];
  const carouselItems = [
    { title: 'Powerful Components', description: 'Build complex UIs with ease using our pre-built components.' },
    { title: 'Responsive Design', description: 'Create layouts that look great on any device with our responsive grid system.' },
    { title: 'Performance Optimized', description: 'Enjoy blazing-fast load times with our optimized rendering engine.' },
  ];
  const galleryItems = [
    {
      title: "Responsive Dashboard",
      description: "A sleek, data-driven dashboard built with LunaScript, showcasing real-time analytics and interactive charts.",
      imageUrl: "/api/placeholder/400/300",
    },
    {
      title: "E-commerce Platform",
      description: "A fully-featured online store powered by LunaScript, demonstrating smooth user interactions and seamless checkout process.",
      imageUrl: "/api/placeholder/400/300",
    },
    
    {
      title: "Task Management System",
      description: "An efficient task management tool created with LunaScript, showcasing drag-and-drop functionality and collaborative features.",
      imageUrl: "/api/placeholder/400/300",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Moon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">LunaScript</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200">{item}</a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden bg-gray-800 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a key={item} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">{item}</a>
            ))}
          </div>
        </motion.div>
      )}

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              <span className="block xl:inline">Build beautiful web apps with </span>
              <span className="block mt-2 xl:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">LunaScript</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              LunaScript is a modern JavaScript framework for creating elegant, efficient, and scalable web applications.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-200">
                  Get started
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200">
                  Learn LunaScript
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-900 text-lg font-medium text-gray-300">
                  Why choose LunaScript?
                </span>
              </div>
            </div>

            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              {['Fast', 'Scalable', 'Modern', 'Developer-friendly'].map((feature) => (
                <motion.div key={feature} whileHover={{ scale: 1.05 }} className="relative">
                  <dt>
                    <svg className="absolute h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="ml-9 text-lg leading-6 font-medium text-white">{feature}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
        
      </main>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-24 h-24 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <a 
                    href="#" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Read more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Feature Showcase</h2>
          <div className="relative">
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronRight />
            </button>
            <div className="overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold mb-2">{carouselItems[currentSlide].title}</h3>
                  <p className="text-gray-300">{carouselItems[currentSlide].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Design', 'Develop', 'Deploy'].map((step, index) => (
              <div key={step} className="text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'Frontend Developer', quote: 'LunaScript has revolutionized the way I build web applications. It\'s incredibly intuitive and powerful.' },
              { name: 'Jane Smith', role: 'UX Designer', quote: 'The component library in LunaScript is a game-changer. It\'s helped us streamline our design process significantly.' },
              { name: 'Mike Johnson', role: 'CTO', quote: 'We\'ve seen a dramatic increase in productivity since adopting LunaScript. It\'s now an integral part of our tech stack.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Ready to Get Started?</h2>
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">Join thousands of developers who are already building amazing things with LunaScript.</p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <a href="#" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-200">
                Start Your Free Trial
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$9', features: ['Up to 5 projects', 'Basic components', 'Community support'] },
              { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Advanced components', 'Priority support', 'Custom themes'] },
              { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Dedicated support', 'Custom development', 'On-premise deployment'] },
            ].map((plan) => (
              <motion.div 
                key={plan.name} 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section 2: Latest from the Blog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Introducing LunaScript 2.0', date: 'May 15, 2024', excerpt: 'Discover the powerful new features in our latest release.' },
              { title: 'Building Scalable Apps with LunaScript', date: 'May 10, 2024', excerpt: 'Learn best practices for creating large-scale applications.' },
              { title: 'LunaScript vs Other Frameworks', date: 'May 5, 2024', excerpt: 'A comprehensive comparison of popular JavaScript frameworks.' },
            ].map((post, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section 3: Community and Resources */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'GitHub', description: 'Contribute to LunaScript and explore our open-source projects.' },
              { icon: Book, title: 'Documentation', description: 'Comprehensive guides and API references for LunaScript.' },
              { icon: Users, title: 'Forum', description: 'Connect with other developers and get help from the community.' },
            ].map((resource, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <resource.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
                <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            {[ Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{Icon.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 LunaScript. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;