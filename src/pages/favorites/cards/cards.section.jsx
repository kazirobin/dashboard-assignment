import React, { useState } from "react";
import { IoChevronBack, IoChevronForward, IoHeart, IoHeartOutline } from "react-icons/io5";
import { IoStar, IoStarOutline } from "react-icons/io5";

const productData = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: 120.0,
    rating: 4,
    reviews: 131,
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80",
    ],
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max",
    price: 999.0,
    rating: 5,
    reviews: 256,
   images: [
     "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80",
    ],
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249.0,
    rating: 4,
    reviews: 189,
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=80",
    ],
  },
  {
    id: 4,
    name: "MacBook Pro 16",
    price: 2399.0,
    rating: 5,
    reviews: 342,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80",
    ],
  },
];

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-80 hover:shadow-md transition-shadow">
      <div className="relative bg-gray-50 rounded-xl mb-4 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
        
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              aria-label="Previous image"
            >
              <IoChevronBack className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
              aria-label="Next image"
            >
              <IoChevronForward className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="transition-transform hover:scale-110"
            aria-label="Add to favorites"
          >
            {isFavorite ? (
              <IoHeart className="w-6 h-6 text-red-500" />
            ) : (
              <IoHeartOutline className="w-6 h-6 text-gray-400 hover:text-red-400" />
            )}
          </button>
        </div>

        <p className="text-2xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              index < product.rating ? (
                <IoStar key={index} className="w-4 h-4 text-yellow-400" />
              ) : (
                <IoStarOutline key={index} className="w-4 h-4 text-gray-300" />
              )
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <button className="cursor-pointer mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors">
          Edit Product
        </button>
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;