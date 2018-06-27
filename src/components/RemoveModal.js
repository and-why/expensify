import React from "react";
import Modal from "react-modal";


const RemoveModal = (props) => (
  <Modal
    isOpen={props.modalOpen}
    onRequestClose={props.handelCloseModal}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="remove--modal"
    ariaHideApp={false}
    onRemove={props.onRemove}
    >
    <h3>Are You Sure?</h3>
    <button className="btn btn--red" onClick={props.onRemove}>Confirm</button>
    <button className="btn btn--clear" onClick={props.handelCloseModal}>Cancel</button>
  </Modal>
);

export default RemoveModal;
