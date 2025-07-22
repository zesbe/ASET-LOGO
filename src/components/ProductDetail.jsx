import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, Check, Download, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk Tidak Ditemukan</h2>
        <Link to="/" className="btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-yellow-500 text-white';
      case 'New':
        return 'bg-green-500 text-white';
      case 'Popular':
        return 'bg-purple-500 text-white';
      case 'Hot':
        return 'bg-red-500 text-white';
      case 'Premium':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <nav className="text-sm text-gray-600">
            <span>Beranda</span>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            {product.badge && (
              <span className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </span>
            )}
            {product.discount && (
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                -{product.discount}%
              </span>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} ulasan)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </div>
              {product.originalPrice && (
                <div className="flex items-center space-x-2">
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 text-sm font-medium rounded">
                    Hemat {product.discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Yang Anda Dapatkan:
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Jaminan Kami:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-700">Download Instan</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-700">Garansi Kualitas</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-700">Update Gratis</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full btn-primary text-lg py-4 inline-flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Tambah ke Keranjang
              </button>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                Beli Sekarang
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Produk Serupa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="text-lg font-bold text-primary-600">
                      {formatPrice(relatedProduct.price)}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;