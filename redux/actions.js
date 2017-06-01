import consts from './constants.js';
const { ADD_APPLE, ADD_BANANA, SET_NAME, TOGGLE_FRUIT_SHOP } = consts;

export function addApple(count = 1) {
  return {
    type: ADD_APPLE,
    payload: count,
  };
}

export function addBanana(count = 1) {
  return {
    type: ADD_BANANA,
    payload: count,
  };
}

export function toggleFruitShop() {
  return { type: TOGGLE_FRUIT_SHOP };
}

export function setName(name = "world") {
  return {
    type: SET_NAME,
    payload: name,
  };
}
