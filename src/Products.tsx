import React, { useState } from "react";

interface Product {
  id: number;
  img: string;
  label: string;
  badge: string | null;
  cat: string;
  name: string;
  desc: string;
  price: string;
  oldPrice: string | null;
}

interface ProductsProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const Products: React.FC<ProductsProps> = ({ setCartCount }) => {
  const [toast, setToast] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const addToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    showToast(`✓ ${product.name} added to cart`);
    setShowModal(false);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const products: Product[] = [
    {
      id: 1,
      img: `${import.meta.env.BASE_URL}images/smartphone-placeholder.png`,
      label: "SMARTPHONE",
      badge: "NEW",
      cat: "Smartphones",
      name: "Volt Pro 16 Ultra",
      desc: '6.7" OLED · 200MP · 5000mAh battery',
      price: "$1,199",
      oldPrice: null,
    },
    {
      id: 2,
      img: `${import.meta.env.BASE_URL}images/headphone-placeholder.png`,
      label: "AUDIO",
      badge: "SALE",
      cat: "Audio",
      name: "ANC Studio Headphones",
      desc: "40hr battery · Hi-Res · Foldable",
      price: "$199",
      oldPrice: "$279",
    },
    {
      id: 3,
      img: `${import.meta.env.BASE_URL}images/laptop-placeholder.png`,
      label: "LAPTOP",
      badge: null,
      cat: "Laptops",
      name: "ThinBook Air X1",
      desc: '14" 2K · 32GB RAM · 1TB SSD',
      price: "$1,499",
      oldPrice: null,
    },
    {
      id: 4,
      img: `${import.meta.env.BASE_URL}images/smartwatch-placeholder.png`,
      label: "WEARABLE",
      badge: "HOT",
      cat: "Wearables",
      name: "SmartWatch Series 9",
      desc: "AMOLED · Health Suite · ECG",
      price: "$329",
      oldPrice: "$399",
    },
  ];

  return (
    <>
      <section className="section" id="products">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">Handpicked for you</div>
            <h2 className="section-title">Featured products</h2>
          </div>
          <a href="#" className="section-link">
            View all products →
          </a>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => openModal(product)}
            >
              <div className="product-img">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img-inner"
                />
                <span className="product-img-label mono">{product.label}</span>
                {product.badge && (
                  <span
                    className={`product-badge mono ${product.badge === "SALE" ? "sale" : ""}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-info">
                <div className="product-cat">{product.cat}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-desc">{product.desc}</div>
                <div className="product-foot">
                  <div>
                    <span className="product-price">{product.price}</span>
                    {product.oldPrice && (
                      <span className="product-old">{product.oldPrice}</span>
                    )}
                  </div>
                  <button
                    className="product-add"
                    data-name={product.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {toast && (
        <div id="toast" className="show">
          {toast}
        </div>
      )}
      {showModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}
    </>
  );
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="modal-details">
            <div className="modal-category mono">{product.cat}</div>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">{product.desc}</p>
            <div className="modal-price">
              <span className="current-price">{product.price}</span>
              {product.oldPrice && (
                <span className="old-price">{product.oldPrice}</span>
              )}
            </div>
            <button
              className="modal-add-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
