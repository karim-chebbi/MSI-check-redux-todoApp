import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { doneTask } from '../JS/Actions';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const TaskModel = ({task}) => {
  // The TaskModel component is responsible for displaying the details of a single task, including its title, description, and status (done or not done). It also provides buttons for marking the task as done/undone, editing the task, and deleting the task. The component uses React Bootstrap for styling and layout, and it interacts with the Redux store to dispatch actions for updating the task's status.

    // The useDispatch hook is used to access the dispatch function from the Redux store, allowing the component to dispatch actions such as marking a task as done or undone when the corresponding button is clicked.
    const dispatch = useDispatch()
  return (
    <div
      style={task.isDone ? { backgroundColor: "lightgreen" } : null}
      className="border my-3 p-2 d-flex justify-content-between align-items-center"
    >
      <div>
        <h5 style={task.isDone ? { textDecoration: "line-through" } : null}>
          {task.title}
        </h5>
        <p>{task.description}</p>
      </div>
      <div className='d-flex gap-2'>
        <Button onClick={()=> dispatch(doneTask(task.id))} variant='light'>{task.isDone ? "Undone" : "Done"}</Button>
        <EditTask task={task} />
        <DeleteTask task={task} />
      </div>
    </div>
  );
}

export default TaskModel