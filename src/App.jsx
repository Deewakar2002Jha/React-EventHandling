import React, { useState } from "react";
import CountButtonPlusMinus from "./Components/useState/CountButtonPlusMinus";
import ShowHidePassword from "./Components/useState/ShowHidePassword";
// import CountButton from "./components/CountButton";
import DarkMode from "./Components/useState/DarkMode"
import { RegistrationFromMultipleState } from "./Components/useState/RegistrationFromMultipleState";


const App = () => {
  // const [count, setCount] = useState(0);


  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button> */}
      {/* <CountButtonPlusMinus /> */}
      {/* <ShowHidePassword /> */}
      {/* <DarkMode /> */}
      <RegistrationFromMultipleState />

    </>
  );
};

export default App;