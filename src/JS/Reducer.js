import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes";


// The initialState object defines the initial state of the Redux store for a to-do list application. It contains a property called todoList, which is an array of task objects. Each task object has an id (generated randomly), a title, a description, and an isDone status indicating whether the task is completed or not. This initial state serves as the starting point for the application's state management, allowing the reducer to handle actions that modify the to-do list based on user interactions.
const initialState = {
  todoList: [
    {
      id: Math.floor(Math.random() * 1001),
      title: "Task 1",
      description: "Learn props",
      isDone: false,
    },
    {
      id: Math.floor(Math.random() * 1001),
      title: "Task 2",
      description: "Learn hooks",
      isDone: true,
    },
    {
      id: Math.floor(Math.random() * 1001),
      title: "Task 3",
      description: "Learn redux",
      isDone: false,
    },
  ],
};

// The todoReducer function is a Redux reducer that manages the state of a to-do list application. It takes the current state and an action (with type and payload) as arguments and returns a new state based on the action type. The reducer handles four action types: DONE_TASK, DELETE_TASK, ADD_TASK, and EDIT_TASK. Depending on the action type, it updates the todoList in the state by toggling the isDone status of a task, removing a task, adding a new task, or editing an existing task's title and description. If the action type does not match any of the cases, it returns the current state unchanged.
export const todoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case DONE_TASK:
            return {...state, todoList: state.todoList.map((task)=> task.id === payload ? {...task, isDone: !task.isDone} : task)}
        
        case DELETE_TASK:
            return {...state, todoList: state.todoList.filter((task) => task.id !== payload)}
    
        case ADD_TASK:
            return { ...state, todoList: [payload, ...state.todoList] };

        case EDIT_TASK:
            return {...state, todoList: state.todoList.map((task) => task.id === payload.id ? {...task, title: payload.title, description: payload.description} : task)}

        default:
            return state;
    }
}