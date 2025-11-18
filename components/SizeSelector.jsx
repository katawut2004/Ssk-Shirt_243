'use client';
import React, { useState } from 'react';
import { sizes } from '../data/sizes';

export default function SizeSelector({ selectedStyle }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState({});

  const styleSizes = selectedStyle === 1 ? sizes.style1 : sizes.style2;

  const handleQuantityChange = (size, value) => {
    const numValue = parseInt(value) || 0;
    setQuantity(prev => ({
      ...prev,
      [size]: numValue
    }));
  };

  return (
    <div className="mb-6">

      {/* จำนวนเสื้อเดดไลน์รับ (รวมทั้งสิน) */}
      <div className="mb-4">
        <h4 className="font-bold text-gray-700 mb-3">
          จำนวนไซส์เสื้อที่ขายได้ (รวมทั้งสิ้น)
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {styleSizes.map((item) => (
            <button
              key={item.size}
              onClick={() => setSelectedSize(item.size)}
              className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedSize === item.size
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-blue-400'
              }`}
            >
              <div>{item.size}: {item.stock} ตัว</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}