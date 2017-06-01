/* This is only due to a bug in chrome canary - can't export not default */
import consts from './constants.js';
const { ADD_APPLE, ADD_BANANA, SET_NAME, TOGGLE_FRUIT_SHOP } = consts;

const initialState = {
  content: 'Hello, world!',
  fruitShop: false,
  bananas: 0,
  apples: 0,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_NAME:
      return { ...state, content: `Hello, ${payload}!` }
    case ADD_BANANA:
      return { ...state, bananas: state.bananas + payload };
    case ADD_APPLE:
      return { ...state, apples: state.apples + payload };
    case TOGGLE_FRUIT_SHOP:
      return { ...state, fruitShop: !state.fruitShop };
    default:
      return state;
  }
}