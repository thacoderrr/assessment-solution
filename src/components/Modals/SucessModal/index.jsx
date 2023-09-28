import React from 'react';
import ReactDOM from 'react-dom';
import Centered from '../../Centered';
import Modal from '../Modal';
import { ReactComponent as Tick_circle3 } from '../../../assets/main/icon/tick-circle3.svg';

const SuccessModal = ({
  icon,
  open,
  close,
  loading,
  header,
  text,
  children,
}) => {
  return ReactDOM.createPortal(
    <Modal
      open={open}
      loading={loading}
      close={close}
      style={{ position: 'fixed' }}
    >
      <Centered>
        {icon && (
          <div className="modal__div-icon">
            <Tick_circle3 />
          </div>
        )}
        <div className="modal__div-success">
          <p className="modal__p-success">{header ? header : 'Success!'}</p>
          <p className="modal__p-text">{text}</p>
        </div>
        {children}
      </Centered>
    </Modal>,
    document.body
  );
};

export default SuccessModal;
