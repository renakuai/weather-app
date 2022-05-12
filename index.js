import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ZipProvider } from './controls/ZipContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ZipProvider>
        <App />
    </ZipProvider>
  </React.StrictMode>
);

