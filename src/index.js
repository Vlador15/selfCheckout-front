import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import DataStore from './store/dataStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <Context.Provider
    value={{
      data: new DataStore(),
    }}
  >
    <App />
  </Context.Provider>
);
