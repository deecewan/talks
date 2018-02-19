import store from './store.js';
import * as actions from './actions.js';
import render from './view.js';

const wrappedActions = Object.entries(actions)
  .map(([k, v]) => ({ [k]: (...args) => store.dispatch(v(...args)) }))
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});

store.subscribe(() => {
  window.requestAnimationFrame(() => {
    render(store.getState(), wrappedActions);
  });
});

render(store.getState(), wrappedActions);

window.store = store;
