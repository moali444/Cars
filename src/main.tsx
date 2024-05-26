import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './helpers/i18n';
import { store } from './redux/store';
import { Provider } from 'react-redux';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
