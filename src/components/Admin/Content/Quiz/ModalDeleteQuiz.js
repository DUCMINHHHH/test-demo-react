import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { DeleteQuiz } from "../../../../services/apiServices";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, dataDelete, fetchQuiz } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteQuiz = async () => {
    let res = await DeleteQuiz(dataDelete.id);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();
      fetchQuiz();
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete:{" "}
          <b>{dataDelete && dataDelete.name ? dataDelete.name : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={() => handleSubmitDeleteQuiz()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
