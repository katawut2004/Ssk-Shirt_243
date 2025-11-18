'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import SizeSelector from '../components/SizeSelector';
import OrderSummary from '../components/OrderSummary';
import { products } from '../data/products';

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState(1);
  const product = products.shirt243;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ฝั่งซ้าย - รูปสินค้า */}
          <ProductGallery />

          {/* ฝั่งขวา - ข้อมูลสินค้า */}
          <div className="w-full lg:w-1/2">
            <ProductInfo product={product} />

            {/* เลือกแบบเสื้อ */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                สถิติการขายเสื้อ
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedStyle === style.id
                        ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold text-lg mb-1">{style.code} ตัว</div>
                      <div className="text-sm">เสื้อยกคอ ({style.name})</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <OrderSummary 
              product={product} 
              selectedStyle={selectedStyle}
            />

            <SizeSelector selectedStyle={selectedStyle} />
          </div>
        </div>

        {/* ส่วนล่าง - ข้อมูลติดต่อ */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                ช่องทางสั่งซื้อและสอบถาม
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>📞 โทรศัพท์: 093-358 1622</p>
                <p>📱 LINE: @ชื่อไลน์</p>
                <p>📍 สถานที่: หอการค้าจังหวัดศรีสะเกษ</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                รายละเอียดการชำระเงิน
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  ✓ มัดจำ ณ วันที่ 28 ตุลาคม 2568<br/>
                  ✓ สามารถโอนเงินผ่านธนาคาร<br/>
                  ✓ ชำระเงินปลายทางได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 หอการค้าจังหวัดศรีสะเกษ (วิลาทหัวเพื่อสังคม)</p>
          <p className="text-sm text-gray-400 mt-2">
            บริษัทกรุงเทพ ประเวศิวัตถุ เอกนักบริหารทรัพย์ 333-4-23368-5
          </p>
        </div>
      </footer>
    </div>
  );
}