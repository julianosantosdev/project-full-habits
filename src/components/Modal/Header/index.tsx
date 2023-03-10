import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

interface iModalTitle {
  title: string;
}

const ModalHeader = ({ title }: iModalTitle) => {
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <div className="modalHeader">
      <h3 className="heading-3">{title}</h3>
      <button
        onClick={() => {
          handleCloseModal();
        }}
      >
        X
      </button>
    </div>
  );
};

export { ModalHeader };
