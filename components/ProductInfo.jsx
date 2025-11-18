import React from 'react';

export default function ProductInfo({ product }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {product.name}
      </h1>

      {/* คำอธิบายสินค้า */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          {product.description}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.subDescription}
        </p>
      </div>

      {/* ราคา */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">ค่าจัดส่ง</p>
            <p className="text-2xl font-bold">ตัวแรก {product.price} บาท</p>
          </div>
          <div>
            <p className="text-sm opacity-90">ตัวถัดไป</p>
            <p className="text-2xl font-bold">ตัวละ {product.deposit} บาท</p>
          </div>
        </div>
      </div>
    </div>
  );
}