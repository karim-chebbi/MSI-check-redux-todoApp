import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../JS/Actions';

const DeleteTask = ({task}) => {
     const [show, setShow] = useState(false);

     const dispatch = useDispatch()

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleDelete = () => {
        dispatch(deleteTask(task.id))
        handleClose()
     }
  return (
    <div>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are you sure you want to delete this task!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteTask