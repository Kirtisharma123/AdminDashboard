// index.js or main entry file

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Create a root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

  
