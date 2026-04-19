import React, { useState, useEffect } from "react";

const PromoBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 8, m: 24, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) {
          s = 59;
          m--;
          if (m < 0) {
            m = 59;
            h--;
            if (h < 0) {
              h = 0;
              m = 0;
              s = 0;
              clearInterval(interval);
            }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="promo-bar">
      <span className="promo-badge mono">FLASH SALE</span>
      <p className="promo-text">
        Up to <strong>40% off</strong> selected audio &amp; accessories. Limited
        stock.
      </p>
      <div className="promo-countdown">
        <div className="count-block">
          <span className="count-num mono">
            {String(timeLeft.h).padStart(2, "0")}
          </span>
          <span className="count-lbl">HRS</span>
        </div>
        <span className="count-sep">:</span>
        <div className="count-block">
          <span className="count-num mono">
            {String(timeLeft.m).padStart(2, "0")}
          </span>
          <span className="count-lbl">MIN</span>
        </div>
        <span className="count-sep">:</span>
        <div className="count-block">
          <span className="count-num mono">
            {String(timeLeft.s).padStart(2, "0")}
          </span>
          <span className="count-lbl">SEC</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
