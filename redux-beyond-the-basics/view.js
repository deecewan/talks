const root = document.getElementById('root');

function createButton(symbol, action) {
  const button = document.createElement('button');
  button.innerText = symbol;
  button.addEventListener('click', action);

  return button;
}

function createValueDisplay(count) {
  const value = document.createElement('p');
  value.innerText = `Count: ${count}`;

  return value;
}

/* The buttons - they're static so don't need to be in the render loop */
const add = createButton('+', increment);
const minus = createButton('-', decrement);

export default function render(state, { increment, decrement }) {
  Array.from(root.children).map(x => x.remove());

  const value = createValueDisplay(state.count);

  root.appendChild(add);
  root.appendChild(value);
  root.appendChild(minus);
}
