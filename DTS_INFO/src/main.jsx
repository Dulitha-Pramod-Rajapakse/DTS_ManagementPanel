import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// src/main.jsx
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.jsx';
import store from './store.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <AppRouter />
  </Provider>
  </React.StrictMode>
);