import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskModel from './TaskModel';
import AddTask from './AddTask';
import { Dropdown } from 'react-bootstrap';

const TaskList = () => {
    const todoList = useSelector((state) => state.todoList);

    const [status, setStatus] = useState("All")

    
  return (
    <div
      style={{ maxWidth: "60%" }}
      className="container border border-dark rounded p-4"
    >
      <div className="d-flex justify-content-between align-items-center">
        <AddTask />
        <div>
          score:
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {status}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setStatus("All")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Done")}>
                Done
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus("Undone")}>
                Undone
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {status === "Done"
        ? todoList
            .filter((task) => task.isDone)
            .map((task) => <TaskModel task={task} key={task.id} />)
        :
        status === "Undone"
        ?
            todoList
                .filter((task) => !task.isDone)
                .map((task) => <TaskModel task={task} key={task.id} />)
        : todoList.map((task) => <TaskModel task={task} key={task.id} />)}
    </div>
  );
}

export default TaskList