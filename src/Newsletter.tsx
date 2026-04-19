import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("✓ You're subscribed! Welcome to Voltex.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <div className="newsletter" id="newsletter">
        <div>
          <div className="nl-eyebrow">Stay in the loop</div>
          <h2 className="nl-title">
            Tech drops.
            <br />
            First access.
          </h2>
          <p className="nl-sub">
            Join 40,000+ subscribers who get early access to new arrivals,
            exclusive deals, and hands-on reviews — before anyone else.
          </p>
        </div>
        <div>
          <form className="nl-form" onSubmit={handleSubscribe}>
            <input
              type="text"
              className="nl-input"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="nl-input"
              placeholder="your@email.com"
              required
            />
            <button type="submit" className="nl-submit">
              Subscribe — It's Free
            </button>
            <p className="nl-note">
              No spam. Unsubscribe anytime. That's a promise.
            </p>
          </form>
        </div>
      </div>
      {toast && (
        <div id="toast" className="show">
          {toast}
        </div>
      )}
    </>
  );
};

export default Newsletter;
