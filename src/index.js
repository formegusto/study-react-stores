import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './mobx/stores';
// import { Provider } from 'react-redux';
import { loggerMiddleWare } from 'middleware/LoggerMiddleware';
import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './middleware/thunk/modules';
// import rootReducer, { rootSaga } from './middleware/saga/useApi/module';
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'mobx-react';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(
//   sagaMiddleware,
//   ReduxThunk,
//   loggerMiddleWare
// ));
// sagaMiddleware.run(rootSaga);

// const store = createStore(rootReducer,applyMiddleware(ReduxThunk,loggerMiddleWare))
const store = new RootStore();

ReactDOM.render(
  <Provider {...store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();