import ProductCard from "@/components/products/ProductCard";

const allProducts: Record<string, { id: number; imageSrc: string; price: number; name: string }[]> = {
  "Ice Cream - Cake": [
    {
      id: 1,
      imageSrc: "/swensens/cake-1.jpg",
      price: 599,
      name: "Mini Bear Cake 1.5lbs.",
    },
    {
      id: 2,
      imageSrc: "/swensens/cake-2.jpg",
      price: 599,
      name: "Halloween Cake 1.5lbs.",
    },
  ],
  "Ice Cream Quart (450g)": [
    {
      id: 3,
      imageSrc: "/swensens/ice-cream-quart.jpg",
      price: 379,
      name: "Ice Cream Quart 450g",
    },
  ],
  promotion: [ 
    {
      id: 4,
      imageSrc: "/swensens/pro-ice-2.jpg",
      price: 499,
      name: "Promo Item 1",
    },
    {
      id: 5,
      imageSrc: "/swensens/pro-ice.jpg",
      price: 299,
      name: "Promo Item 2",
    },
  ],
};


export default function ProductList({ category }: { category: string }) {
  const products = allProducts[category] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.imageSrc}
          price={product.price}
          name={product.name}
          description={product.name}
        />
      ))}
    </div>
  );
}
