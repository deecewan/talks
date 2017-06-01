export default function helper(store, actions) {
  Object.entries(actions).forEach(([name, fn]) => {
    window[name] = (...args) => store.dispatch(fn(...args));
  });
}