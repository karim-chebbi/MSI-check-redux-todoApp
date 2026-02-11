import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { doneTask } from '../JS/Actions';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const TaskModel = ({task}) => {
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