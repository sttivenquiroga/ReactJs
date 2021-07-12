import React, { useState } from "react";
import "./App.css";
import ColorList from "./ColorList";
import colorData from "./color-data.json";

function App() {
  const [colors, setColor] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColor(newColors);
      }}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColor(newColors);
      }}
    />
  );
}

export default App;
