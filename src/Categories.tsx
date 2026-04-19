import React from "react";
import {
  MdPhoneAndroid,
  MdHeadphones,
  MdLaptop,
  MdWatch,
} from "react-icons/md";

const Categories: React.FC = () => {
  const categories = [
    { icon: <MdPhoneAndroid />, name: "Smartphones", count: "142 products" },
    { icon: <MdHeadphones />, name: "Audio", count: "89 products" },
    { icon: <MdLaptop />, name: "Laptops", count: "67 products" },
    { icon: <MdWatch />, name: "Wearables", count: "53 products" },
  ];

  return (
    <div className="categories-wrapper" id="categories">
      <div className="section-eyebrow" style={{ marginBottom: "8px" }}>
        Browse by type
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "28px",
        }}
      >
        <h2 className="section-title">Shop categories</h2>
        <a href="#" className="section-link">
          All categories →
        </a>
      </div>
      <div className="categories">
        {categories.map((cat, index) => (
          <div key={index} className="cat-card">
            <span className="cat-icon">{cat.icon}</span>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count mono">{cat.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
