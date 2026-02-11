import { createStore } from "redux";
import { todoReducer } from "./Reducer";


// The store is created using the createStore function from the Redux library, with the todoReducer as the root reducer. Additionally, the code includes support for the Redux DevTools Extension, allowing developers to inspect and debug the state changes in the application. The store is then exported for use in other parts of the application, such as providing it to the React components through the Provider component from react-redux.
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;