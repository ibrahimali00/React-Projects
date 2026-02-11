import { FaTimes } from 'react-icons/fa';
import { useGolbalContext } from './Context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGolbalContext();
  return (
    <div
      className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos non
          quaerat perferendis dolorum aliquid, numquam laborum repellendus nemo
          sapiente recusandae, ducimus veniam soluta dicta animi pariatur,
          laudantium ullam praesentium quam!
        </p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
