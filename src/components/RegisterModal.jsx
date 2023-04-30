import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Register from "../pages/Register";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Register />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>
    </>
  );
};

export default RegisterModal;
