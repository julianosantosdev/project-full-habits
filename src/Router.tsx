import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedPages } from "./pages/PrivatePages";
import { PublicPages } from "./pages/PublicPages";
import { RegisterPage } from "./pages/RegisterPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<PublicPages />}>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>

    <Route path="/dashboard" element={<ProtectedPages />}>
      <Route index element={<DashboardPage />} />
    </Route>
  </Routes>
);

{
  /* <Routes>
      <Route path='/' element={<PublicPages />}>
        <Route index element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
      
      <Route path='/shop' element={<ProtectedPages />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes> */
}

