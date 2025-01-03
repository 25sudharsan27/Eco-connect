import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Presentation/Pages/Home/Home';
import Profile from './Presentation/Pages/Profile/Profile';
import { Routes } from 'react-router-dom';
import Connections from './Presentation/Pages/Connections/Connections';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/connect" element={<Connections/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
