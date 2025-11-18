import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">SSK</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">ศรีสะเกษ</h1>
            <p className="text-xs text-gray-600">SISAKET ROBOTICS</p>
          </div>
        </div>

        {/* ยอดขาย */}
        <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold">
          ยอดขาย 33,099 ตัว
        </div>
      </div>
    </header>
  );
}