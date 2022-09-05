import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

if (process.env.NODE_ENV === 'production') {
  serviceWorkerRegistration.register();
} else {
  serviceWorkerRegistration.unregister();
}