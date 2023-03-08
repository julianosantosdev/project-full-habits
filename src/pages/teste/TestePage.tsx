import { useContext } from 'react';
import { ModalTemplate } from '../../components/Modal/Template';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { iModalType } from '../../contexts/ModalContext/types';

const TestPage = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleModal = (type: string) => {
    setShowModal(type);
  };

  return (
    <>
      {showModal && <ModalTemplate type={showModal} />}
      <h1>teste</h1>
      <button
        type='button'
        onClick={() => {
          handleModal('sleeping');
        }}
      >
        Registro de Sono
      </button>
      <button
        type='button'
        onClick={() => {
          handleModal("exercise");
        }}
      >
        Exercícios
      </button>
      <button
        type='button'
        onClick={() => {
          handleModal("reading");
        }}
      >
        Leitura
      </button>
    </>
  );
};

export { TestPage };

