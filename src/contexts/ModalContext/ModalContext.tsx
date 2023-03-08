import { createContext, useState } from 'react';
import { iModalContext, iModalContextProps } from './types';

const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return <ModalContext.Provider value={{showModal, setShowModal, handleCloseModal}}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };

