import { Route, Routes } from 'react-router-dom';
import { TestPage } from './pages/teste/TestePage';

export const Router = () => (
  <Routes>
    <Route path='/' element={<TestPage />} />
    {/* <Route path="/login" element={} />
    <Route path="/dashboard" element={} /> */}
  </Routes>
);

