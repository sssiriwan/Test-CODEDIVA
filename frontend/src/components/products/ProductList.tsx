import { useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";

// Define a type for the product data
type Product = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
};

export default function ProductList({ categoryId }: { categoryId: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(categoryId);
        
        const response = await fetch(`http://localhost:4000/products/category?categoryId=${categoryId}&_=${new Date().getTime()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        console.log(data);
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length === 0 ? (
        <div>No products found for this category</div>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageUrl}
            price={product.price}
            name={product.name}
          />
        ))
      )}
    </div>
  );
}
