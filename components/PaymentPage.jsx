'use client';
import React, { useState } from 'react';

// URL ของรูปภาพ QR Code (สมมติว่าไฟล์ถูกวางไว้ที่ /public/promptpay-qr.png)
const QR_IMAGE_PATH = '/promptpay-qr.png';

export default function PaymentPage({ onConfirmPayment, onBackToForm }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConfirm = () => {
    // ในสถานการณ์จริง: ควรมีการตรวจสอบการชำระเงินจริงที่นี่
    // ตอนนี้เราจำลองการชำระเงินสำเร็จ
    setShowSuccessModal(true);
  };

  const handleBackToHome = () => {
    // เรียกฟังก์ชันที่ส่งมาจาก page.jsx เพื่อกลับไปหน้า summary
    onConfirmPayment(); 
  };

  return (
    <div className="p-6 bg-white border-2 border-green-500 rounded-xl shadow-2xl max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-green-700 mb-6 border-b pb-3 text-center">
        ขั้นตอนที่ 2: ชำระเงินด้วย PromptPay 💰
      </h2>

      {/* QR Code Container */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border-dashed border-2 border-gray-300">
        <div className="text-gray-600 mb-3 text-sm">สแกน QR Code เพื่อชำระเงิน</div>
        
        {/* ใช้รูปที่ผู้ใช้แนบมา (ต้องวางไฟล์ใน public/promptpay-qr.png) */}
        <img 
          src={QR_IMAGE_PATH} 
          alt="PromptPay QR Code" 
          className="w-full max-w-xs md:max-w-sm rounded-lg shadow-xl border-4 border-white"
        />
        
        <div className="mt-4 text-center">
          <div className="text-lg text-gray-800">ชื่อบัญชี:</div>
          <div className="font-extrabold text-xl text-purple-700">คฑาวุธ ผ่องราษี</div>
        </div>
      </div>

      {/* ปุ่มคำสั่ง */}
      <div className="pt-6 flex justify-between gap-4">
        <button
          type="button"
          onClick={onBackToForm}
          className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg transition-all hover:bg-gray-300 transform hover:scale-[1.02]"
        >
          ← ย้อนกลับ
        </button>
        
        <button
          type="button"
          onClick={handleConfirm}
          className="flex-1 bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
        >
          ยืนยันการชำระเงิน ✅
        </button>
      </div>

      {/* Success Modal (ป็อปอัพชำระเงินสำเร็จ) */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm text-center transform transition-all scale-100 animate-fade-in-up">
            <div className="text-6xl text-green-500 mb-4 animate-bounce-once">🎉</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              ชำระเงินสำเร็จ!
            </h3>
            <p className="text-gray-600 mb-6">
              ระบบได้รับคำสั่งซื้อและข้อมูลการชำระเงินของคุณแล้ว
            </p>
            <button
              onClick={handleBackToHome}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
            >
              กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      )}
    </div>
  );
}