import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './App';
// import './index.css';
import './styles/main.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
}
