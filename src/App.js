import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="london" />
      </header>
      <footer>
        This project was coded by Zeinab and is <a href="" target="_blank">open source on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
