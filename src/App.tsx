import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import PromoBar from "./PromoBar";
import Products from "./Products";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import CartSidebar from "./CartSidebar";
import GlobalAudio from "./GlobalAudio";

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <GlobalAudio />
      <Nav cartCount={cartCount} onCartClick={() => setShowCart(true)} />
      <Hero />
      <PromoBar />
      <Products setCartCount={setCartCount} />
      <Categories />
      <Newsletter />
      <Footer />
      <CartSidebar
        show={showCart}
        onClose={() => setShowCart(false)}
        cartCount={cartCount}
      />
    </>
  );
};

export default App;
