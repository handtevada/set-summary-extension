import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

const rootElement = document.createElement("div");
rootElement.id = "react-app-vite";

document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);