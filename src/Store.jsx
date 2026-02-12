import React, { useState } from "react";

const Store = () => {
  const products = [
    { id: 1, name: "แอปเปิ้ล", price: 100 },
    { id: 2, name: "บลูเบอร์รี่", price: 280 },
    { id: 3, name: "สตรเบอร์รี่", price: 300 },
    { id: 4, name: "กีวี่", price: 150 },
    { id: 5, name: "เชอร์รี่", price: 600 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Logic คำนวณเงิน
  const total = selectedProduct ? selectedProduct.price * quantity : 0;
  const discount = total >= 1000 ? total * 0.1 : 0;
  const netTotal = total - discount;

  const handleSelect = (p) => {
    setSelectedProduct(p);
    setQuantity(1); // รีเซ็ตจำนวนเมื่อเลือกสินค้าใหม่
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-8">ร้านฟรุตตี้</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ฝั่งซ้าย: รายการสินค้า Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, index) => (
            <div
              key={index}
              onClick={() => handleSelect(p)}
              className="bg-blue-100 border-2 border-blue-200 p-6 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors h-32"
            >
              <span className="text-lg">{p.name}</span>
              <span className="text-lg">{p.price}</span>
            </div>
          ))}
        </div>

        {/* ฝั่งขวา: เครื่องคิดเลข/สรุปรายการ */}
        <div className="w-full lg:w-96 bg-white border-2 border-gray-800 rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            {/* ชื่อสินค้า */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg">ชื่อสินค้า:</label>
              <div className="flex-1 bg-purple-100 p-3 rounded border border-purple-200 min-h-[3rem]">
                {selectedProduct?.name}
              </div>
            </div>

            {/* ราคา */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg">ราคา:</label>
              <div className="flex-1 bg-purple-100 p-3 rounded border border-purple-200 min-h-[3rem]">
                {selectedProduct?.price}
              </div>
            </div>

            {/* จำนวน พร้อมปุ่มบวกลบ */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-gray-800 p-2 text-center bg-white">จำนวน</label>
              <div className="flex-1 flex items-center justify-between gap-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <div className="flex-1 bg-orange-100 border-2 border-orange-200 p-2 text-center text-xl font-bold">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* รวมเงิน */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-gray-800 p-2 text-center bg-white">รวม:</label>
              <div className="flex-1 bg-green-100 p-3 rounded border border-green-200 text-right text-xl font-semibold">
                {total.toLocaleString()}
              </div>
            </div>

            {/* ส่วนลด */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-gray-800 p-2 text-center bg-white">ส่วนลด</label>
              <div className="flex-1 bg-green-100 p-3 rounded border border-green-200 text-right text-xl font-semibold">
                {discount.toLocaleString()}
              </div>
            </div>

            {/* สุทธิ */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-gray-800 p-2 text-center bg-white">สุทธิ</label>
              <div className="flex-1 bg-green-200 p-3 rounded border border-green-300 text-right text-2xl font-bold">
                {netTotal.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Store;