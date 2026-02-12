import React, { useState } from 'react'

const Store = () => {
    const products = [
        { id: 1, name: "Wireless Mouse", price: 100 },
        { id: 2, name: "Keyboard", price: 800 },
        { id: 3, name: "Earpod", price: 300 },
        { id: 4, name: "USB-C Cable 1M", price: 150 },
        { id: 5, name: "Universal Charger", price: 600 },
    ];
    const itemStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  }
  const [selectedProduct, setSelectdProduct] = useState({});
  return (
    <div>
        <h1>ร้านไอทีสเตชั่น</h1>
    <hr />
    {products.map((p) => (
        <div key={p.id} style={itemStyle} onClick= { () => setSelectdProduct(p) }>
          <h4>{p.name}</h4>
          <p>{p.price} บาท</p>
        </div>
      ))}
      <h2>สรุปรายการ</h2>
      สินค้าที่เลือก: {selectedProduct.name} <br />
      ราคาสินค้า: {selectedProduct.price} บาท
      </div>
  );
};

export default Store;