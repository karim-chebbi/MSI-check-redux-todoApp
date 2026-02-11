import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../JS/Actions';

const DeleteTask = ({task}) => {
  // The DeleteTask component provides a user interface for confirming the deletion of a task. It uses React Bootstrap components for styling and layout, and it interacts with the Redux store to dispatch actions for deleting tasks.
     const [show, setShow] = useState(false);

     const dispatch = useDispatch()

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     // The handleDelete function is responsible for dispatching the deleteTask action with the task's ID to update the Redux store and remove the task from the list. After dispatching the action, it closes the modal.
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