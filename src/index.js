import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';

const store = configureStore()

//测试fetch的功能
import {getData, postData} from './fetch/data.js'
getData()
postData()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
