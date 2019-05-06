import React, { useState } from 'react';

const useRandomColor = (colors, initialColor) => {
  const [color, setColor ] = useState(initialColor);
  const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  };

  return [color, changeColor];
};

export const ReusableHook = () => {
  const colors = ["red", "blue", "green", "yellow", "black", "brown"];
  const [color, changeColor] = useRandomColor(colors, "green");

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: color,
      }}
    >
      <h2 style={{ color: "white" }}>Click below to change color</h2>
      <br/>
      <button onClick={changeColor}>Change color with reusable hook</button>
    </div>
  )
};

export default ReusableHook;
