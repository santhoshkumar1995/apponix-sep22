import React from "react";
import background from "./image/bimg1.jpg";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}