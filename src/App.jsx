import React, { useState } from "react";
// import CountButton from "./components/CountButton";


const App = () => {
  const [count, setCount] = useState(0);


  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>

    </>
  );
};

export default App;