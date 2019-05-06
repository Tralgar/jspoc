import React, { useState, useEffect } from 'react';

export const Hook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hook::\"useEffect\" -> ', "useEffect");
    document.title = `Click ${count}`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click inc hook counter
      </button>
      <button onClick={() => setCount(count)}>
        Click to set count = count
      </button>
    </div>
  );
};

export default Hook;
