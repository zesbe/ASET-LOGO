import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Download, Headphones, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Garansi Kualitas",
      description: "Semua produk telah diverifikasi dan bergaransi 100%"
    },
    {
      icon: Download,
      title: "Download Instan",
      description: "Dapatkan produk digital langsung setelah pembayaran"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Tim support siap membantu Anda kapan saja"
    },
    {
      icon: RefreshCw,
      title: "Update Gratis",
      description: "Dapatkan update produk secara gratis selamanya"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-primary-600">DigitalStore</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan pengalaman berbelanja terbaik dengan layanan berkualitas tinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100K+</div>
              <div className="text-sm text-gray-600">Download</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;