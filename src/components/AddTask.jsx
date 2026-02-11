import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions';

const AddTask = () => {
  // The AddTask component provides a user interface for adding new tasks to the task list. It uses React Bootstrap components for styling and layout, and it interacts with the Redux store to dispatch actions for adding tasks.
      const [show, setShow] = useState(false);

      const dispatch = useDispatch()

      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      // The handleAdd function is responsible for creating a new task object with a unique ID, title, description, and a default isDone status of false. It then dispatches the addTask action to update the Redux store with the new task and closes the modal.
      const handleAdd = () => {
        let newTask = {id: Math.floor(Math.random() * 1001), title, description, isDone: false}
        dispatch(addTask(newTask))
        handleClose()
      }

  return (
    <div>
      <Button onClick={handleShow} variant="dark">
        Add Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task 1"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddTask