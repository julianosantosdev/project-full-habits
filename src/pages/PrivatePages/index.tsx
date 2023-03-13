import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const ProtectedPages = () => {
  const { user } = useContext(UserContext);  
  const navigate = useNavigate();
  const token = localStorage.getItem('@TOKEN-HABBITS');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{token ? <Outlet /> : null}</>;
};

export { ProtectedPages };