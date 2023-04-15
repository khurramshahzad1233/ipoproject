import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navprovider from './components/context/Navprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Navprovider>
    <App />
  </Navprovider>
);


