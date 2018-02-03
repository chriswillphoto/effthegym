import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Router';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import gymApp from './reducers';

let store = createStore(
  gymApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
