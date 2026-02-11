import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './JS/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Wrap the App component with the Provider component and pass the store as a prop
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
