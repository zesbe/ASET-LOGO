import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Toko Digital
                <span className="block text-yellow-300">Terlengkap</span>
                di Indonesia
              </h1>
              <p className="text-xl text-gray-200 max-w-lg">
                Dapatkan produk digital berkualitas tinggi untuk mengembangkan bisnis dan skill Anda. 
                Dari template, kursus, hingga tools premium dengan harga terjangkau.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">50K+ Pelanggan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">100K+ Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-900 inline-flex items-center justify-center group">
                Mulai Belanja
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                Lihat Katalog
              </button>
            </div>
          </motion.div>

          {/* Right Content - Featured Products Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Featured Product Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 space-y-3"
              >
                <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                <div>
                  <h3 className="font-semibold text-sm">WordPress Themes</h3>
                  <p className="text-xs text-gray-300">50+ Premium Templates</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-300 font-bold text-sm">Rp 299K</span>
                    <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">Hot</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 space-y-3 mt-8"
              >
                <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
                <div>
                  <h3 className="font-semibold text-sm">UI/UX Course</h3>
                  <p className="text-xs text-gray-300">Complete Masterclass</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-300 font-bold text-sm">Rp 199K</span>
                    <span className="text-xs bg-green-400 text-gray-900 px-2 py-1 rounded-full">New</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 space-y-3 -mt-4"
              >
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg"></div>
                <div>
                  <h3 className="font-semibold text-sm">Social Templates</h3>
                  <p className="text-xs text-gray-300">1000+ Designs</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-300 font-bold text-sm">Rp 149K</span>
                    <span className="text-xs bg-red-400 text-white px-2 py-1 rounded-full">Sale</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 space-y-3 mt-4"
              >
                <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg"></div>
                <div>
                  <h3 className="font-semibold text-sm">React Course</h3>
                  <p className="text-xs text-gray-300">Expert Level</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-300 font-bold text-sm">Rp 349K</span>
                    <span className="text-xs bg-purple-400 text-white px-2 py-1 rounded-full">Pro</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;