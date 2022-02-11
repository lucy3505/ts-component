import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import LikeButton2 from "./components/LikeButton2";
import ContextButton from "./components/ContextButton";
// import MouseTracker from "./components/MouseTracker";
import MouseMove from "./components/MouseMove";
import DogShow2 from "./components/DogShow2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <MouseTracker /> */}
        <DogShow2 />
        <MouseMove />
        <Hello message="hello2"></Hello>
        <LikeButton2></LikeButton2>
        <ContextButton />
      </header>
    </div>
  );
}

export default App;
