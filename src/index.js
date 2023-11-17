import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App'
import store from './app/store'

const domNode =  document.getElementById('root')
const root = createRoot(domNode)
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)