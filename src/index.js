import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './mobx/stores';
import { Provider } from 'react-redux';
import { loggerMiddleWare } from 'middleware/LoggerMiddleware';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './middleware/redux/modules';
import ReduxThunk from "redux-thunk";
// import { Provider } from 'mobx-react';

const store = createStore(rootReducer,applyMiddleware(loggerMiddleWare,ReduxThunk))
// const store = new RootStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
