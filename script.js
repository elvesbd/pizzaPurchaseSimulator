const c = (e) => {
  return document.querySelector(e);
}

const cs = (e) => {
  return document.querySelectorAll(e);
}

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;

  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;//preenchedo descrição das pizzas
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;//preenchedo nome das pizzas
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;//preenchedo descrição das pizzas

  c('.pizza-area').append(pizzaItem);
});