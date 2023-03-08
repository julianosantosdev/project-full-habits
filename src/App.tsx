import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "./Router";
import { Toastfy } from "./Toastfy";
import { GlobalColorAndTypography } from "./styles/GlobalColorAndTypography";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalColorAndTypography />
      <UserProvider>
        <Router />
      </UserProvider>
      <Toastfy />
    </>
  );
}

export default App;
