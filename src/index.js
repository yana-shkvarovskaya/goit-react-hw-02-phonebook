import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

// // const elem1 = React.createElement('span', { children: 'Привет,' });
// const elem1 = <span>Привет</span>;

// // const elem2 = React.createElement('span', { children: 'мир!' });
// const elem2 = <span>мир</span>;

// // const elem = React.createElement('div', {
// //   a: 5,
// //   b: 10,
// //   //   children: [elem1, ' ', elem2],
// //   children: 'Привет, мир',
// // });

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);
// // console.log(elem);

// // ReactDOM.render(elem, document.querySelector('#root'));

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
