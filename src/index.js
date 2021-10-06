import react from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import 'antd/dist/antd.css'
import store from './app/store';

import App from './App';

reactDom.render(
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>
  , document.getElementById('root'));