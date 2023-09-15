import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterPlayer from './RouterPlayer';
// react i18next
import '../src/Internationalization/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterPlayer />
  </React.StrictMode>
);

reportWebVitals();
