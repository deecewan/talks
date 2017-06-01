export default function updater(store) {
  /* get all our refs */
  const nameDiv = document.querySelector('#div');
  const fruitShopContainer = document.querySelector('#fruit-shop');
  const applesSpan = document.querySelector('#apples');
  const bananasSpan = document.querySelector('#bananas');

  const updatePage = () => {
    const { content, fruitShop, apples, bananas } = store.getState();

    nameDiv.innerText = content;
    if (fruitShop) {
      fruitShopContainer.style = null;
    } else {
      fruitShopContainer.style = 'display: none;';
    }

    applesSpan.innerText = apples;
    bananasSpan.innerText = bananas;

    /* you do not want to do this here */
    localStorage.state = JSON.stringify(store.getState(), null, 2);
  }

  store.subscribe(updatePage);
  updatePage();
}