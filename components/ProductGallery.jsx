'use client';
// 1. นำเข้า Next.js Image Component
import Image from 'next/image';
import React, { useState } from 'react';

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  // 2. ใช้ Path สตริงที่อ้างอิงถึง /public/images/ โดยตรง
  const images = [
    '/images/shirt2.jpg',
    '/images/shirt3.jpg',
    '/images/shirt1.jpg'
  ];

  return (
    <div className="w-full lg:w-1/2">
      {/* รูปภาพหลัก */}
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        {/* ต้องมี relative เพื่อให้ Image fill ทำงาน */}
        <div className="aspect-square relative bg-white">
          
          {/* 🖼️ ใช้ next/image สำหรับรูปภาพหลัก */}
          <Image
            // ใช้ Path สตริงจาก Array
            src={images[selectedImage]}
            alt={`รูปสินค้าหลัก ${selectedImage + 1}`}
            // layout="fill" และ object-cover เพื่อให้รูปภาพขยายเต็มพื้นที่
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw" 
            className="object-cover transition duration-300"
            // เพิ่ม priority สำหรับรูปภาพหลักหากเป็นส่วนที่ต้องโหลดเร็ว
            priority={selectedImage === 0}
          />
          
        </div>
      </div>

      {/* รูปภาพย่อย */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            // เพิ่ม 'group' และ 'relative'
            className={`group aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all relative ${
              selectedImage === index
                ? 'border-blue-500'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            {/* 🖼️ ใช้ next/image สำหรับรูปภาพย่อย */}
            <Image
              src={img}
              alt={`รูปย่อสินค้า ${index + 1}`}
              fill 
              sizes="33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}