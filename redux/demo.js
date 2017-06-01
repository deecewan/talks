import reducer from './reducer.js';
import * as actions from './actions.js';
import helper from './helper.js';
import updater from './updater.js';

const { createStore } = window.Redux;

const store = createStore(
  reducer,
  localStorage.state ? JSON.parse(localStorage.state) : undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

helper(store, actions);
updater(store);