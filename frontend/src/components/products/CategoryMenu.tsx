import React, { useState, useEffect } from "react";

export default function CategoryMenu({
  selectedCategoryId,
  onSelectCategory,
}: {
  selectedCategoryId: number;
  onSelectCategory: (categoryId: number) => void;
}) {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:4000/category");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex gap-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-xl ${
            selectedCategoryId === category.id ? "bg-white text-red-500 px-6 py-3 rounded-full border border-red-500 hover:bg-red-100 focus:outline-none" : " text-gray-500 bg-slate-100"
          }`}
          onClick={() => onSelectCategory(category.id)} 
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
