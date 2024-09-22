import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <div>
      <div>
        <h1>Привет, меня зовут Евгений</h1>
        <p>Я Frontend Разработчик</p>
      </div>
      <div>Мои проекты:</div>
      <div>
        <h1>Apple Ferrum Store
        </h1>
        <b>Онлайн Магазин техники Apple</b>
        <iframe
          src="https://apple-ferrum-store.vercel.app/"
          width={1200}
          height={700}
          frameBorder={1}
          style={{ borderRadius: 10 }}
        >
          <h1>Hello</h1>
        </iframe>
      </div>
    </div>
  );
}

export default App;
