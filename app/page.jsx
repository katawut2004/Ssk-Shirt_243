// app/page.jsx
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import SizeSelector from '../components/SizeSelector';
import OrderSummary from '../components/OrderSummary';
import OrderForm from '../components/OrderForm'; // <--- 1. Import OrderForm เข้ามา
import { products } from '../data/products';

export default function Home() {
    const [selectedStyle, setSelectedStyle] = useState(1);
    const [isOrdering, setIsOrdering] = useState(false); // <--- 2. State ใหม่สำหรับสลับหน้า
    
    // กำหนดสินค้า
    const product = products.shirt243; 

    // ฟังก์ชันสำหรับเปลี่ยนไปหน้าฟอร์ม
    const handleCheckout = () => {
        setIsOrdering(true);
    };

    // ฟังก์ชันสำหรับกลับไปหน้าหลัก/สรุป
    const handleBackToSummary = () => {
        setIsOrdering(false);
    };

    // 3. ถ้า isOrdering เป็น true ให้แสดง OrderForm ทันที
    if (isOrdering) {
        return (
            <div className="min-h-screen bg-gray-100 py-10">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    {/* แสดง OrderForm เต็มหน้าจอ */}
                    <div className="max-w-3xl mx-auto"> 
                        <OrderForm 
                            styles={product.styles} // ส่งข้อมูลแบบเสื้อ
                            onBackToSummary={handleBackToSummary} // ส่งฟังก์ชันกลับหน้าหลัก
                        />
                    </div>
                </main>
                {/* Footer สามารถแสดงหรือไม่แสดงก็ได้ ตามความเหมาะสม */}
                <footer className="bg-gray-800 text-white py-6 mt-12">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2024 หอการค้าจังหวัดศรีสะเกษ (วิลาทหัวเพื่อสังคม)</p>
                    </div>
                </footer>
            </div>
        );
    }
    
    // 4. ถ้า isOrdering เป็น false (หน้าหลัก) ให้แสดงรายละเอียดสินค้า
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

                        {/* 5. ส่ง onCheckout prop ไปยัง OrderSummary */}
                        <OrderSummary 
                            product={product} 
                            selectedStyle={selectedStyle}
                            onCheckout={handleCheckout} // <--- จุดเชื่อมต่อ
                        />

                        <SizeSelector selectedStyle={selectedStyle} />
                    </div>
                </div>

                {/* ส่วนล่าง - ข้อมูลติดต่อ */}
                <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* ... ข้อมูลติดต่อ/ชำระเงิน เดิม ... */}
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