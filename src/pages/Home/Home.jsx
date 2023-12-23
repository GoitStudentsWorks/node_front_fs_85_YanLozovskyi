import { useState } from 'react';
import Modal from './Modal';
import { DailyNorma, WaterRatioPanel } from 'components';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Home</h1>
      <DailyNorma />
      <WaterRatioPanel />
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Home;
