import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => {
        switch (activeCategory) {
          case 'template':
            return product.category === 'Template & Theme';
          case 'course':
            return product.category === 'Kursus Online';
          case 'software':
            return product.category === 'Software & Tools';
          case 'ebook':
            return product.category === 'E-book & Guide';
          default:
            return true;
        }
      });

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
    <section id="products" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk <span className="text-primary-600">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai produk digital berkualitas tinggi untuk mengembangkan bisnis dan skill Anda
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                    -{product.discount}%
                  </span>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary-600 font-medium">{product.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Lihat Lebih Banyak Produk
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;