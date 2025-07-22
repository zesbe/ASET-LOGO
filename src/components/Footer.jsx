import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold">DigitalStore</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Toko online terpercaya untuk produk digital berkualitas tinggi. 
                Kami menyediakan template, kursus, tools, dan e-book untuk 
                mengembangkan bisnis dan skill Anda.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Menu Utama</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/#products" className="text-gray-300 hover:text-white transition-colors">
                    Produk
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Kategori Produk</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Template & Theme
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Kursus Online
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Software & Tools
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    E-book & Guide
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Preset & Filter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Hubungi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300">Email</div>
                    <a href="mailto:info@digitalstore.com" className="text-white hover:text-primary-400">
                      info@digitalstore.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300">Telepon</div>
                    <a href="tel:+628123456789" className="text-white hover:text-primary-400">
                      +62 812-3456-789
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300">Alamat</div>
                    <address className="text-white not-italic">
                      Jl. Digital Raya No. 123<br />
                      Jakarta Selatan, DKI Jakarta
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Dapatkan Update Produk Terbaru
            </h3>
            <p className="text-gray-300 mb-6">
              Berlangganan newsletter kami untuk mendapatkan informasi produk baru dan penawaran eksklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DigitalStore. Semua hak cipta dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
                Bantuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;