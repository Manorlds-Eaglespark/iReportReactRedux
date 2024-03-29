import React from 'react';
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import store from './reducers/rootReducer';
import store from './store';
import Routes from './Routes';

export default function App() {
  toast.configure({
    autoClose: 10000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
  });
  return (
    <Provider store={store}>
      <React.Fragment>
        <ToastContainer enableMultiContainer containerId="A" />
        <Routes />
      </React.Fragment>
    </Provider>
  );
}
