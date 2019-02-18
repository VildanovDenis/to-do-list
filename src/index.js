import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


const arrToObj = arr.reduce(function(acc, item, index) {
  const acc = {...acc, [index]: item}
  return acc;
});
