const c = (e) => {
  return document.querySelector(e);
}

const cs = (e) => {
  return document.querySelectorAll(e);
}

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;//preenchedo preços das pizzas
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;//preenchedo nome das pizzas
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;//preenchedo descrição das pizzas

  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  });


  c('.pizza-area').append(pizzaItem);
});