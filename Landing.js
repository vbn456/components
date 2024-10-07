// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to Our Service</h1>
        <p>Your journey to excellence starts here</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Curabitur non ligula sed neque accumsan scelerisque.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Pellentesque habitant morbi tristique senectus et netus.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
