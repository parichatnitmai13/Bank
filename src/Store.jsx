import React, { useState } from "react";

const Store = () => {
  const products = [
    { id: 1, name: "แอปเปิ้ล", price: 100 },
    { id: 2, name: "บลูเบอร์รี่", price: 280 },
    { id: 3, name: "สตรเบอร์รี่", price: 300 },
    { id: 4, name: "กีวี่", price: 150 },
    { id: 5, name: "เชอร์รี่", price: 600 },
  ];

  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <div>
      <h1 className="text-7xl font-bold text-indigo-600">ร้านฟรุตตี้</h1>
      <div className="container mx-auto flex flex-col">
        {products.map((p) => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <h4>{p.name}</h4>
            <p>{p.price} บาท</p>
          </div>
        ))}

        <h2>สรุปรายการ</h2>

        {selectedProduct ? (
          <>
            สินค้าที่เลือก: {selectedProduct.name} <br />
            ราคาสินค้า: {selectedProduct.price} บาท
          </>
        ) : (
          <p>ยังไม่ได้เลือกสินค้า</p>
        )}
      </div>
    </div>
  );
};

export default Store;
