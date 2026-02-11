import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskModel from './TaskModel';
import AddTask from './AddTask';
import { Dropdown } from 'react-bootstrap';

const TaskList = () => {
// The TaskList component is responsible for displaying the list of tasks and providing filtering options based on their completion status. It uses the useSelector hook to access the todoList from the Redux store and manages the local state for the selected filter status (All, Done, Undone). The component renders the AddTask component for adding new tasks and a Dropdown for selecting the filter criteria. Based on the selected status, it filters and maps through the todoList to display the appropriate tasks using the TaskModel component.

    // The useSelector hook is used to access the todoList from the Redux store, allowing the component to retrieve the current list of tasks and display them accordingly.
    const todoList = useSelector((state) => state.todoList);

    // The useState hook is used to manage the local state for the selected filter status, which determines how the tasks are displayed based on their completion status (All, Done, Undone).
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