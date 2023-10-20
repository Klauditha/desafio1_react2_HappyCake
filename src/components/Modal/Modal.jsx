/* eslint-disable react/prop-types */
const Modal = ({ tipo, texto }) => {
  return (
    <div className={tipo} role="alert">
      {texto}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Modal;
