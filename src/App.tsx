import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from './Router';
import { Toastfy } from './Toastfy';
import { GlobalColorAndTypography } from './styles/GlobalColorAndTypography';
import { UserProvider } from './contexts/UserContext';
import { ModalProvider } from './contexts/ModalContext/ModalContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalColorAndTypography />
      <UserProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </UserProvider>
      <Toastfy />
    </>
  );
}

export default App;

