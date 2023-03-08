import { createContext, useState } from 'react';
import { iModalContext, iModalContextProps } from './types';

const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [showModal, setShowModal] = useState(null);

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return <ModalContext.Provider value={{showModal, setShowModal, handleCloseModal}}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };

