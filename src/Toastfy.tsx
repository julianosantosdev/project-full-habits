import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toastfy = () => (
  <ToastContainer
    position="top-right"
    autoClose={800}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="light"
  />
);
