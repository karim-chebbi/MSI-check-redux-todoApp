import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes"

// doneTask action creator is responsible for creating an action to mark a task as done or undone. It takes the task's id as an argument and returns an action object with the type DONE_TASK and the payload containing the id of the task to be updated. This action will be dispatched to the Redux store, where the reducer will handle the logic for toggling the task's completion status based on its current state.
export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: id
    }
}

// deleteTask action creator is responsible for creating an action to delete a task from the Redux store. It takes the task's id as an argument and returns an action object with the type DELETE_TASK and the payload containing the id of the task to be deleted. This action will be dispatched to the Redux store, where the reducer will handle the logic for removing the specified task from the list of tasks.
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

// addTask action creator is responsible for creating an action to add a new task to the Redux store. It takes a newTask object as an argument, which contains the details of the task to be added (such as id, title, description, and isDone status). The function returns an action object with the type ADD_TASK and the payload containing the newTask object. This action will be dispatched to the Redux store, where the reducer will handle the logic for adding the new task to the list of tasks.
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

// editTask action creator is responsible for creating an action to edit an existing task in the Redux store. It takes the task's id, updated title, and updated description as arguments and returns an action object with the type EDIT_TASK and the payload containing the id, title, and description of the task to be edited. This action will be dispatched to the Redux store, where the reducer will handle the logic for updating the specified task with the new title and description.
export const editTask = (id, title, description) => {
    return {
        type: EDIT_TASK,
        payload: {id, title, description}
    }
}