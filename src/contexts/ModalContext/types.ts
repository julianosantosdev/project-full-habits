interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalType {
  type: string;
}

interface iModalContext {
  setShowModal: React.Dispatch<React.SetStateAction<null>>;
  showModal: null;
  handleCloseModal: () => void;
}

export type { iModalContextProps, iModalType, iModalContext };

