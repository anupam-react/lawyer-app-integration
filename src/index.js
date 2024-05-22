import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Responsive.css'
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    <ToastContainer />
    </RecoilRoot>
  </React.StrictMode>
);


