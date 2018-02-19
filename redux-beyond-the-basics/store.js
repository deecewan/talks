import reducer from './reducer.js';
import { initialStateEnhancer, loaderEnhancer } from './enhancers.js';
import { logger, thunk } from './middleware.js';

const Redux = window.Redux;
const compose = Redux.compose;

export default Redux.createStore(
  reducer,
  { count: 12 },
  compose(
    Redux.applyMiddleware(thunk, logger),
    initialStateEnhancer,
    loaderEnhancer,
  ),
);
