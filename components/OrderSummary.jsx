'use client';
import React, { useState } from 'react';

export default function OrderSummary({ product, selectedStyle }) {
  const [activeTab, setActiveTab] = useState(1);

  const styles = product.styles;
  const currentStyle = styles.find(s => s.id === selectedStyle);

  return (
    <div className="mb-6">
      {/* เลือกลิขสิทธิ์ */}
      <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-4">
        <h3 className="text-lg font-bold bg-purple-500 text-white px-4 py-3">
          ลิงค์การซื้อเสื้อ
        </h3>
        
        {/* Tabs */}
        <div className="grid grid-cols-2">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveTab(style.id)}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === style.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm">{style.code} ตัว</div>
              <div className="text-xs">เสื้อที่ขายได้ (รวมทั้งสิ้น) ({style.name})</div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 bg-gray-50">
          {styles.map((style) => (
            activeTab === style.id && (
              <div key={style.id}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">เสื้อที่ขายได้:</span>
                  <span className="font-bold text-gray-800">{product.orderInfo[`style${style.id}`].id} ตัว</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">จำนวนออเดอร์:</span>
                  <span className="font-bold text-green-600">
                    {product.orderInfo[`style${style.id}`].ordered.toLocaleString()} รายการ
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* ปุ่มสั่งซื้อ */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
        เข้าสู่ระบบเพื่อซื้อเสื้อ
      </button>
    </div>
  );
}