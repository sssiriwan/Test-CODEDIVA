"use client";

import {useState, useEffect} from "react";

const AdminPage = () => {
  const [formData, setFormData] = useState<{
    id: number | null;
    name: string;
    price: string;
    category: number;
    imageSrc: string;
  }>({
    id: null,
    name: "",
    price: "",
    category: 1,
    imageSrc: "",
  });

  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: string;
      imageUrl: string;
      category: {id: number; name: string};
    }[]
  >([]);

  const [statusCreate, setStatusCreate] = useState<boolean>(false);

  const [categories, setCategories] = useState<{id: number; name: string}[]>(
    []
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "category" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category.toString());
    if (selectedFile) {
      formDataToSend.append("image", selectedFile);
    }

    try {
      const response = await fetch("http://localhost:4000/products/create", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (data) {
        setStatusCreate(!statusCreate);
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }

    setFormData({
      id: null,
      name: "",
      price: "",
      category: 1,
      imageSrc: "",
    });
    setSelectedFile(null);
    setImagePreview(null);
  };

  const handleEdit = (product: typeof formData) => {
    setFormData(product);
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [statusCreate]);

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Manage Products</h1>
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 p-4 border rounded shadow-sm"
      >
        <h2 className="text-xl mb-4">
          {formData.id ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Price (THB)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Image File</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedFile(file);

                  const previewURL = URL.createObjectURL(file);
                  setImagePreview(previewURL);
                }
              }}
              className="w-full p-2 border rounded"
              required
            />
            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <p className="font-semibold">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Selected Preview"
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {formData.id ? "Update Product" : "Add Product"}
        </button>
      </form>
      {/* Product List */}
      <div>
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-sm">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              {/* Make sure to access a string value from product.category */}
              <p className="text-gray-600">
                {product.category ? product.category.name : "Unknown Category"}
              </p>
              <p className="text-gray-900 font-semibold mt-2">
                ฿{product.price}
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
