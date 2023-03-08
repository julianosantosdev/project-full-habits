interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalContext {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  handleCloseModal: () => void
}

export type { iModalContextProps, iModalContext };

