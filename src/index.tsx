import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MenuScrap from './pages/MenuScrap';
import Home from 'pages/Home';

import Router from './routes';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);


