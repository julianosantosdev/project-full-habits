import { useState } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "./Router";
import { Toastfy } from "./Toastfy";
import { GlobalColorAndTypography } from "./styles/GlobalColorAndTypography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <GlobalColorAndTypography />
      <Router />
      <Toastfy />
    </>
  );
}

export default App;
