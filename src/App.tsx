import { useState } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Router";
import { Toastfy } from "./toastfy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Router />
      <Toastfy />
    </>
  );
}

export default App;
