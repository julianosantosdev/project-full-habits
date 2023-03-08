import { useContext } from 'react';
import { ModalTemplate } from '../../components/Modal/Template';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

const TestPage = () => {
    const {showModal, setShowModal} = useContext(ModalContext)

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && < ModalTemplate />}
      <h1>teste</h1>
      <button
        type='button'
        onClick={() => {
          handleModal();
        }}
      >
        Show Modal
      </button>
    </>
  );
};

export { TestPage };

