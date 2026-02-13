import React, { useState } from "react";

const Store = () => {
  const products = [
    { id: 1, name: "แอปเปิ้ล", price: 100 },
    { id: 2, name: "บลูเบอร์รี่", price: 280 },
    { id: 3, name: "สตรเบอร์รี่", price: 300 },
    { id: 4, name: "กีวี่", price: 150 },
    { id: 5, name: "ส้ม", price: 120 },
    { id: 6, name: "กล้วย", price: 30 },
    { id: 7, name: "แตงโม", price: 50 },
    { id: 8, name: "มะม่วง", price: 120 },
    { id: 9, name: "มังคุด", price: 140 },
    { id: 10, name: "ทุเรียน", price: 180 },
    { id: 11, name: "ลิ้นจี่", price: 200 },
    { id: 12, name: "ลำไย", price: 100 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const total = selectedProduct ? selectedProduct.price * quantity : 0;
  const discount = total >= 1000 ? total * 0.1 : 0;
  const netTotal = total - discount;

  const handleSelect = (p) => {
    setSelectedProduct(p);
    setQuantity(1);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-8">ร้านฟรุตตี้</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* 🔹 ฝั่งสินค้า (กรอบชมพู) */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => handleSelect(p)}
              className="bg-pink-100 border-2 border-pink-400 
                         p-6 rounded-md flex flex-col items-center 
                         justify-center cursor-pointer 
                         hover:bg-pink-200 transition-colors h-32"
            >
              <span className="text-lg font-medium">{p.name}</span>
              <span className="text-lg">{p.price} บาท</span>
            </div>
          ))}
        </div>

        {/* 🔹 ฝั่งคิดเงิน (กรอบฟ้า) */}
        <div className="w-full lg:w-96 bg-blue-50 border-4 border-blue-400 rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            
            {/* ชื่อสินค้า */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg">ชื่อสินค้า:</label>
              <div className="flex-1 bg-white p-3 rounded border border-blue-200 min-h-[3rem]">
                {selectedProduct?.name}
              </div>
            </div>

            {/* ราคา */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg">ราคา:</label>
              <div className="flex-1 bg-white p-3 rounded border border-blue-200 min-h-[3rem]">
                {selectedProduct?.price}
              </div>
            </div>

            {/* จำนวน */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-blue-400 p-2 text-center bg-white">
                จำนวน
              </label>
              <div className="flex-1 flex items-center justify-between gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center font-bold"
                >
                  -
                </button>

                <div className="flex-1 bg-yellow-100 border-2 border-yellow-300 p-2 text-center text-xl font-bold">
                  {quantity}
                </div>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <hr className="border-blue-200" />

            {/* รวม */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-blue-400 p-2 text-center bg-white">
                รวม:
              </label>
              <div className="flex-1 bg-green-100 p-3 rounded border border-green-300 text-right text-xl font-semibold">
                {total.toLocaleString()}
              </div>
            </div>

            {/* ส่วนลด */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-blue-400 p-2 text-center bg-white">
                ส่วนลด
              </label>
              <div className="flex-1 bg-green-100 p-3 rounded border border-green-300 text-right text-xl font-semibold">
                {discount.toLocaleString()}
              </div>
            </div>

            {/* สุทธิ */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-lg border-2 border-blue-400 p-2 text-center bg-white">
                สุทธิ
              </label>
              <div className="flex-1 bg-green-200 p-3 rounded border border-green-400 text-right text-2xl font-bold">
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
