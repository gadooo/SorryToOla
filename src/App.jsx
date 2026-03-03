// App.js
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      // More frequent floating elements
      for (let i = 0; i < 5; i++) {
        createFloatingElement("💜");
        createFloatingElement("🌸");
        createFloatingElement("❤️");
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const createFloatingElement = (symbol) => {
    const el = document.createElement("div");
    el.classList.add("floating");
    el.innerHTML = symbol;
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 10000);
  };

  const showMessage = () => {
    alert("I love you so much. Please forgive me 💜");

    // Heart & Flower burst effect when button is clicked
    for (let i = 0; i < 25; i++) {
      createFloatingElement("💜");
      createFloatingElement("🌸");
      createFloatingElement("❤️");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>I'm Truly Sorry 💜</h1>

        <p>
          My love, I never meant to hurt you or make you feel unimportant.
          You are the most precious person in my life.
          If my actions ever made you feel like I don't care,
          please know that it was never my intention.
        </p>

        <p>
          I love you more than words can describe.
          You are my peace, my happiness, and my home.
          I promise to always consider your feelings in every decision I make.
        </p>

        <p className="highlight">
          I choose you today, tomorrow, and forever. 💕
        </p>

        <button onClick={showMessage}>Forgive Me ❤️</button>
      </div>
    </div>
  );
}

export default App;


/* ================== App.css ================== */


