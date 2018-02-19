export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}

// Maybe we need a lazy increment function?
export function lazyIncrement() {
  return (dispatch) => {
    setTimeout(() => dispatch(increment()), 500);
  }
}