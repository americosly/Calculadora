import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(< Calculator />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Calculadora</h1>
        <p>By Américo</p>
        <Calculator />
    </div>
);


reportWebVitals();
