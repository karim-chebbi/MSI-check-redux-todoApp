import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes";


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