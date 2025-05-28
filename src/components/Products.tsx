
import React from 'react';
import ProductCarousel from './products/ProductCarousel';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50 overflow-hidden">
      <div className="px-2 md:px-4">
        <ProductCarousel />
      </div>
    </section>
  );
};

export default Products;
