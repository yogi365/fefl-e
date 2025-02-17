import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Heading, App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading />
    <App />
  </React.StrictMode>
);


