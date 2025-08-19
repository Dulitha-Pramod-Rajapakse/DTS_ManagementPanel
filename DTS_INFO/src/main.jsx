import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Provider } from "react-redux";
import HomeLayout from "./layouts/Home.jsx";
import store from "./store.js";
import { ToastContainer } from 'react-toastify';




ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <AppRouter />
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
  </Provider>
);