import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './store';
import Cities from './containers/Cities'

function App() {
  return (
    <>
      <header></header>
      <main>
        <Provider store={store}>
          <Cities />
        </Provider>
      </main>
    </>
  );
}

export default App;
