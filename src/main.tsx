import React from 'react';
import ReactDOM from 'react-dom/client';

import DefaultLayout from './app/layouts/Default/Default.layout';
import RoutesApp from './app/routes';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <RoutesApp />
      </DefaultLayout>
    </BrowserRouter>
  </React.StrictMode>
);
