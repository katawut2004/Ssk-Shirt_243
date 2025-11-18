// components/OrderForm.jsx
'use client';
import React, { useState } from 'react';

// รายการไซส์เสื้อทั้งหมด
const SIZES = ['SSS', 'SS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL'];

export default function OrderForm({ styles, onBackToSummary }) {
  // State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    zipCode: '',
    email: '',
    style1: styles[0]?.id || '', // เลือกแบบเสื้อ1 (ค่าเริ่มต้น)
    style2: styles[0]?.id || '', // เลือกแบบเสื้อ2 (ค่าเริ่มต้น)
    size: 'M', // ไซส์เสื้อ (ค่าเริ่มต้น)
    notes: '',
  });

  // จัดการการเปลี่ยนแปลงของ input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // จัดการเมื่อกด "ถัดไปเพื่อชำระเงิน"
  const handleSubmit = (e) => {
    e.preventDefault();
    // ในสถานการณ์จริง: ส่งข้อมูลไปที่ API / ไปหน้าชำระเงิน
    console.log('ข้อมูลที่ต้องการชำระเงิน:', formData);
    alert('ดำเนินการต่อไปยังหน้าชำระเงิน...'); 
    // ถ้าใช้ Next.js Router: router.push('/checkout');
  };

  return (
    <div className="p-6 bg-white border-2 border-purple-500 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-extrabold text-purple-700 mb-6 border-b pb-3">
        🛒 กรอกข้อมูลการจัดส่งและเลือกไซส์
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* ชื่อ-สกุล / เบอร์โทร */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup label="ชื่อ-สกุล" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <InputGroup label="เบอร์โทร" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" required />
        </div>
        
        {/* อีเมล / รหัสไปรษณีย์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup label="อีเมล" name="email" value={formData.email} onChange={handleChange} type="email" required />
          <InputGroup label="รหัสไปรษณีย์" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>

        {/* ที่อยู่สำหรับการจัดส่ง */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">ที่อยู่สำหรับการจัดส่ง</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* เลือกแบบเสื้อและไซส์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <SelectGroup label="เลือกแบบเสื้อ 1" name="style1" value={formData.style1} onChange={handleChange} options={styles.map(s => ({ value: s.id, label: s.name }))} required />
          <SelectGroup label="เลือกแบบเสื้อ 2" name="style2" value={formData.style2} onChange={handleChange} options={styles.map(s => ({ value: s.id, label: s.name }))} required />

          <SelectGroup label="ไซส์เสื้อ" name="size" value={formData.size} onChange={handleChange} options={SIZES.map(s => ({ value: s, label: s }))} required />
        </div>

        {/* หมายเหตุ */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">หมายเหตุ (เพิ่มเติม)</label>
          <textarea
            name="notes"
            rows="2"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="เช่น ต้องการให้ส่งก่อนวันที่..."
          />
        </div>

        {/* ปุ่มคำสั่ง */}
        <div className="pt-4 flex justify-between gap-4">
          
          <button
            type="button"
            onClick={onBackToSummary} // ใช้ฟังก์ชันที่ส่งมาจากคอมโพเนนต์แม่
            className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg transition-all hover:bg-gray-300 transform hover:scale-[1.02]"
          >
            ← กลับสู่หน้าหลัก (HOME)
          </button>
          
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
          >
            ถัดไปเพื่อชำระเงิน →
          </button>
        </div>
      </form>
    </div>
  );
}

// Helper component สำหรับ input ทั่วไป
const InputGroup = ({ label, name, value, onChange, type = 'text', required = false }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      required={required}
    />
  </div>
);

// Helper component สำหรับ select
const SelectGroup = ({ label, name, value, onChange, options, required = false }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);