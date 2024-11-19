export default function CategoryMenu({ selectedCategory, onSelectCategory }: { selectedCategory: string; onSelectCategory: (category: string) => void; }) {
    const categories = [
      "Ice Cream - Cake",
      "Ice Cream Quart (450g)",
      "Ice Cream Mini Quart (250g)",
      "Sundae Set",
      "Ice Cream Scoop",
      "Small Bites Ice Cream",
      "Topping",
    ];
  
    return (
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-red-500 text-white" : "bg-gray-200"}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  