import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

This is the entry point of a React application. Here is a breakdown of the code:

React and ReactDOM are imported from the React library.

App is imported from a file named App.js. This file exports a React component that serves as the main component of the application.

reportWebVitals is imported from a file named reportWebVitals.js. This file exports a function that logs performance metrics to the console.

The stylesheet for the ReactToastify library is imported.

The ReactDOM.createRoot() function is called with an argument of document.getElementById('root'). This creates a new root for the React application on an element with an ID of root in the HTML file.

The root.render() function is called with an argument of <React.StrictMode><App /></React.StrictMode>. 
This renders the App component inside a <React.StrictMode> wrapper. 
<React.StrictMode> is a development mode-only feature that highlights potential issues in the application.

*/
