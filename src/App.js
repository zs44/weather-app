import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather city="london" />
        </header>
        <footer>
          This project was coded by Zeinab and is{" "}
          <a href="https://github.com/zs44/weather-app" target="_blank">
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
