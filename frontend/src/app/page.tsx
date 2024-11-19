"use client"; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductList from '@/components/products/ProductList';
import CategoryMenu from '@/components/products/CategoryMenu';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Ice Cream - Cake");

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <div>
          <h1>Delivery To:</h1> {/* componentเพื่อเลือกlocationจากgooglemap*/}
        </div>
        <div>Hi, user.firstName</div>
        <div >
          <img src="/swensens/braner.jpg" alt="Banner"className="w-full max-w-screen-lg mx-auto" />
        </div>
        <div className="mt-4 text-center">
          <h1>Highlight & Promotions</h1>
          <ProductList category="promotion" />
        </div>
        <div>
          <h1>Delivery Menu</h1>
          <CategoryMenu
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ProductList category={selectedCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
