import Image from "next/image";

type ProductCardProps = {
  imageSrc: string; 
  price: number; 
  name: string; 
  description?: string; 
};

export default function ProductCard({
  imageSrc,
  price,
  name,
  description,
}: ProductCardProps) {
  return (
    <div className="relative border rounded-lg shadow-lg p-4 hover:shadow-xl transition group">
      <div className="relative w-full flex flex-col items-center justify-center " >
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-t-lg object-cover"
          width={350} 
          height={250}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-500 mb-2">฿ {price}</h3>
        <h2 className="text-sm font-medium text-gray-900">{name}</h2>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition">
        View Detail
      </button>
    </div>
  );
}
