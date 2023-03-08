import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';

const ModalHeader = () => {
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <div className='modalHeader'>
      <h3 className='heading-3'>Registar Sono</h3>
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

