import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { TestPage } from "./pages/teste/TestePage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<TestPage />} />

    <Route path="/register" element={<RegisterPage />} />
    {/* <Route path="/login" element={} />
    <Route path="/dashboard" element={} /> */}
  </Routes>
);

