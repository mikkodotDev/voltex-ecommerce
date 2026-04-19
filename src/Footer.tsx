import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-logo">VOLTEX</div>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Returns</a>
        <a href="#">Shipping</a>
        <a href="#">Support</a>
        <a href="#">Privacy</a>
      </div>
      <div className="footer-copy mono">
        © 2026 Voltex. All rights reserved.
      </div>
      <div className="footer-credit mono">
        3D Model:{" "}
        <a
          href="https://sketchfab.com/3d-models/free-iphone-13-pro-2021-a35156d91cf44e70a2fdfeade54ae0b2"
          target="_blank"
          rel="noopener noreferrer"
        >
          iPhone 13 Pro
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/3Duae"
          target="_blank"
          rel="noopener noreferrer"
        >
          SDC PERFORMANCE™️
        </a>{" "}
        under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC-BY-4.0
        </a>
      </div>
    </footer>
  );
};

export default Footer;
