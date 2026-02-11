import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/Actions';

const EditTask = ({task}) => {
  // The EditTask component provides a user interface for editing an existing task. It uses React Bootstrap components for styling and layout, and it interacts with the Redux store to dispatch actions for updating tasks. The component receives a task object as a prop, which contains the details of the task to be edited.
          const [show, setShow] = useState(false);

          const dispatch = useDispatch();

          const [title, setTitle] = useState("");
          const [description, setDescription] = useState("");

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);

          // The handleEdit function is responsible for dispatching the editTask action with the task's ID, updated title, and updated description to update the Redux store with the edited task details. After dispatching the action, it closes the modal.
          const handleEdit = () => {
            dispatch(editTask(task.id, title, description));
            handleClose();
          };
  return (
    <div>
      <Button onClick={handleShow} variant="outline-dark">
        Edit Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
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
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTask