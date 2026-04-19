import React, { useState } from "react";

interface CartSidebarProps {
  show: boolean;
  onClose: () => void;
  cartCount: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  show,
  onClose,
  cartCount,
}) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  if (!show && !closing) return null;

  return (
    <div
      className={`cart-sidebar-overlay ${closing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`cart-sidebar ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-sidebar-header">
          <h2>Your Cart ({cartCount})</h2>
          <button className="cart-close" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="cart-sidebar-content">
          <p>Your cart is empty. Add some products to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
