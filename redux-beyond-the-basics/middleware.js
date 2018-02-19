/**
 * If you add more middleware here, don't forget to include it in the
 * `applyMiddleware` call in `./store.js`
 **/

/* add a logger middleware here */
export const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('Previous State:', store.getState());
    console.info('Action:', action);
    next(action);
    console.info('Next State', store.getState());
    console.groupEnd(action.type);
}

/* add thunk middleware here */
export const thunk = (store) => (next) => (action) => {
    // action is either a function or a regular action
    if (typeof action !== 'function') {
        return next(action);
    }

    action(next, store.getState);
}
