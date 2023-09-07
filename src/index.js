import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterPlayer from './RouterPlayer';

// Routes
import PlayerList from './components/player/PlayerList'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterPlayer/>
  </React.StrictMode>
);

reportWebVitals();
