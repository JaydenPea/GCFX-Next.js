// app/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, TrendingUp, BookOpen, BarChart2, Shield, Award } from 'lucide-react';

export default function ModernLandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
            GCFX
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#journal" className="hover:text-indigo-400 transition-colors">Journal</a>
            <a href="#brokers" className="hover:text-indigo-400 transition-colors">Brokers</a>
            <a 
              href="https://grandcapitalfx.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              Get Started
            </a>
          </div>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section with 3D elements and particles */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/30 to-black"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * 100 + '%'],
                opacity: [null, Math.random() > 0.5 ? 0.8 : 0.2] 
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="md:w-2/3">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Elevate Your <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">Trading</span> Journey
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mt-6 text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive resources, education, and tools to master the financial markets
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="https://grandcapitalfx.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                Start Learning <ChevronRight className="h-5 w-5" />
              </a>
              
              <a 
                href="#services" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating 3D elements */}
        <motion.div 
          className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <motion.div 
          className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </section>

      {/* Services Section with Cards */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-indigo-950/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trading Resources Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our complete suite of specialized tools designed for the modern trader
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education Card */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-indigo-950/50 rounded-2xl overflow-hidden border border-indigo-500/30 backdrop-blur-sm p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-black/60 rounded-2xl p-8 flex flex-col">
                <div className="bg-indigo-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-indigo-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Trading Education</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Comprehensive courses, strategies, and market insights for traders at all levels.
                  Master technical analysis, risk management and psychological discipline.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Expert-led video courses</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Trading strategies library</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Live webinars & support</span>
                  </div>
                </div>
                
                <a 
                  href="https://grandcapitalfx.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                >
                  Access Education Portal <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Journal Card */}
            <motion.div 
              id="journal"
              className="bg-gradient-to-br from-gray-900 to-green-950/50 rounded-2xl overflow-hidden border border-green-500/30 backdrop-blur-sm p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-full bg-black/60 rounded-2xl p-8 flex flex-col">
                <div className="bg-green-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart2 className="w-8 h-8 text-green-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Automated Journal</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Track, analyze and improve your trading performance with our advanced 
                  journaling system. Gain insights from your trading history and patterns.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Automated trade importing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Performance analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span>Pattern recognition</span>
                  </div>
                </div>
                
                <a 
                  href="https://gcfxjournalweb-dmfvf2g6gehsctc2.canadacentral-01.azurewebsites.net/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl inline-flex items-center justify-center hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  Open Trading Journal <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Brokers Card */}
            <motion.div 
              id="brokers"
              className="bg-gradient-to-br from-gray-900 to-blue-950/50 rounded-2xl overflow-hidden border border-blue-500/30 backdrop-blur-sm p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full bg-black/60 rounded-2xl p-8 flex flex-col">
                <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Partner Brokers</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Trade with our trusted broker partners and access preferential conditions
                  through our referral links. Secure, regulated, and reliable trading environments.
                </p>
                
                <div className="space-y-6 mt-2">
                  <a 
                    href="https://www.hfm.com/za/?refid=10348966" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">HFM</h4>
                        <p className="text-gray-400 text-sm">Award-winning global broker</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-blue-400" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.windlu.com/?ref=GCFX" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">WINDLU</h4>
                        <p className="text-gray-400 text-sm">Innovative trading solutions</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-blue-400" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with animated counters */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">2,500+</h3>
              <p className="text-gray-400 mt-2">Active Traders</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">100+</h3>
              <p className="text-gray-400 mt-2">Video Lessons</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">150k+</h3>
              <p className="text-gray-400 mt-2">Trades Journaled</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">24/7</h3>
              <p className="text-gray-400 mt-2">Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with glassmorphism */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%237c3aed\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="bg-gradient-to-r p-[1px] from-indigo-500/50 via-purple-500/50 to-pink-500/50 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/80 backdrop-blur-xl p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
                <p className="text-gray-300 text-lg">
                  Join thousands of traders who have elevated their market performance with our resources
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <a 
                  href="https://grandcapitalfx.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all text-center"
                >
                  Start Your Journey <TrendingUp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with modern design */}
      <footer className="bg-black pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">GCFX</h3>
              <p className="text-gray-400 max-w-md">
                Grand Capital FX provides comprehensive trading resources, education, 
                and tools to help traders succeed in the financial markets.
              </p>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="https://grandcapitalfx.com" className="text-gray-400 hover:text-indigo-400 transition-colors">Trading Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Strategy Library</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Market Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Trading Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="https://grandcapitalfx.com/" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="https://grandcapitalfx.com/contact/" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
                <li><a href="https://grandcapitalfx.com/privacy-policy/" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="https://grandcapitalfx.com/terms-and-conditions/" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Grand Capital FX. All rights reserved.</p>
            
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center text-gray-500">
                <Award className="h-4 w-4 mr-2" />
                <span>Trading Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}