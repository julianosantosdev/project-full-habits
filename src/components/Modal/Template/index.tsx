import { ModalHeader } from '../ModalHeader';
import { ModalContainer } from './sytles';

const ModalTemplate = () => {
  console.log('oi');
  return (
    <ModalContainer>
      <div className='modalBody'>
        <ModalHeader />
        <div className='modalContent'>
          <form>
            <input type='text' />
            <input type='text' />
            <button>Adicionar</button>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
};

export { ModalTemplate };

