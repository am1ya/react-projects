import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import NewsComponent from './redux-saga1/NewsComponent';
import newsStore from './redux-saga1/newsStore';
import ParentComponent from './direct-api-call/ParentComponent';
import RailsConsumerComponent from './direct-api-call/RailsConsumerComponent';
import RailsConsumerComponent2 from './direct-api-call/RailsConsumerComponent2';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={newsStore}>
      <NewsComponent />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
