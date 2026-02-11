import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions';

const AddTask = () => {
      const [show, setShow] = useState(false);

      const dispatch = useDispatch()

      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


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