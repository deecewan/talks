/**
 * If you add any enhancers in here, don't forget to add them
 * to the `compose` call in `./store.js`
 **/

/* add a initialState loader */
export const initialStateEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    initialState = initialState || { count: 18 };
    return createStore(reducer, initialState, enhancer);
};

/* notify the console when someone subscribes */
export const subscriberEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  
  // keep a reference to the original subscribe
  const s = store.subscribe;

  // keep track of the subscribers we have
  let count = 0;

  // the redux 'store' is just an object with methods
  return {
    ...store,
    subscribe(fn) {
      console.log('We have a new subscriber!');
      const thisNumber = count++;
      // call the original subscribe with a wrapped function
      s(() => {
        console.log(`Calling subscriber #${thisNumber}`);
      });
    },
  };
};

/* load initialState from localStorage */

const LOCAL_STORAGE = 'redux';
export const loaderEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    let timerId = null;
    initialState = localStorage.getItem(LOCAL_STORAGE);
    try {
        initialState = JSON.parse(initialState);
    } catch (e) {
        initialState = undefined;
    }

    if (initialState == null) {
        initialState = undefined;
    }

    const store = createStore(reducer, initialState, enhancer);

    const d = store.dispatch;

    store.dispatch = (...args) => {
        const res = d(...args);
        clearTimeout(timerId);
        const state = store.getState();
        timerId = setTimeout(() => {
          localStorage.setItem(LOCAL_STORAGE, JSON.stringify(state));
        }, 300);
    };

    return store;
}
