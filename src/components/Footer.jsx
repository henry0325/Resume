import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 text-center">
      <div className="container">
        <div className="footer-note">
          © {new Date().getFullYear()} Henry Chang · Built with React & Bootstrap · Deployed on GitHub Pages
        </div>
      </div>
    </footer>
  );
}
