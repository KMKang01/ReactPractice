import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './chap05/CommentList';
import NotificationList from './chap06/NotificationList';
import Accommodate from './chap07/Accommodate';
import ConfirmButton1 from './chap08/ConfirmButton1';
import ConfirmButton2 from './chap08/ConfirmButton2';
import ConfirmButton3 from './chap08/ConfirmButton3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();