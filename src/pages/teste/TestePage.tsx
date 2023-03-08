import { useState } from 'react';

const TestPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <h1>teste</h1>
      <button type='button' onClick={() => {handleModal()}}>Show Modal</button>
    </>
  );
};

export { TestPage };

