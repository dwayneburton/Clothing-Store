// Import required modules and libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Create a root for ReactDOM to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application with routing support
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: measure app performance
reportWebVitals();