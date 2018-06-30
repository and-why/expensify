import React from "react";
import Modal from "react-modal";

const CustomModal = props => (
  <Modal
    isOpen={props.modalOpen}
    onRequestClose={props.handelCloseModal}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="remove--modal"
    ariaHideApp={false}
    modalAction={props.modalAction}
  >
    <h3>Are You Sure?</h3>
    <button className="btn btn--red" onClick={props.modalAction}>
      Yes
    </button>
    <button className="btn btn--light-blue" onClick={props.handelCloseModal}>
      No
    </button>
  </Modal>
);

export default CustomModal;
