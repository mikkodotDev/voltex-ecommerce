import React from "react";
import Model3DViewer from "./Model3D";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow mono">New Arrival — 2026 Collection</p>
        <h1 className="hero-title">
          Next-gen
          <br />
          tech.
          <br />
          <em>Refined.</em>
        </h1>
        <p className="hero-sub">
          Discover the latest in personal electronics — from flagship
          smartphones to premium audio. Curated for people who demand more.
        </p>
        <div className="hero-cta-row">
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
          <button className="btn-ghost">View Lookbook</button>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">2,400+</div>
            <div className="stat-lbl">Products</div>
          </div>
          <div>
            <div className="stat-num">98%</div>
            <div className="stat-lbl">Satisfaction</div>
          </div>
          <div>
            <div className="stat-num">24hr</div>
            <div className="stat-lbl">Delivery</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <Model3DViewer />
        <div className="hero-overlay">
          <div className="hero-overlay-content">
            <div className="hero-device-label mono">PRO MAX</div>
            <div className="hero-device-price">$1,299</div>
            <div className="hero-device-description mono">
              Experience the future of technology
            </div>
          </div>
        </div>
        <div className="hero-tag mono">New Drop ✦</div>
      </div>
    </section>
  );
};

export default Hero;
