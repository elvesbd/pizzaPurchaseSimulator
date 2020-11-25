let cart = [];
let modalQtd = 1;
let modalkey = 0;

const c = (e) => {
  return document.querySelector(e);
}

const cs = (e) => {
  return document.querySelectorAll(e);
}

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;//preenchedo preços das pizzas
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;//preenchedo nome das pizzas
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;//preenchedo descrição das pizzas

  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQtd = 1;
    modalkey = key;

    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = pizzaJson[key].price.toFixed(2);
    c('.pizzaInfo--size.selected').classList.remove('selected');

    cs('.pizzaInfo--size').forEach( (size, sizeIndex) => {
      if(sizeIndex == 2) {
        size.classList.add('selected');
      }
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    c('.pizzaInfo--qt').innerHTML = modalQtd;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  });


  c('.pizza-area').append(pizzaItem);
});

//events modal
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout( () => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
};

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach( (item) => {
  item.addEventListener('click', closeModal)
});

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  if(modalQtd > 1) {
    modalQtd--;
    c('.pizzaInfo--qt').innerHTML = modalQtd;
  }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
  modalQtd++;
  c('.pizzaInfo--qt').innerHTML = modalQtd;
});

cs('.pizzaInfo--size').forEach( (size, sizeIndex) => {
  size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});

c('.pizzaInfo--addButton').addEventListener('click', () => {
  let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
  
  cart.push({
    id: pizzaJson[modalkey].id,
    qtd: modalQtd,
    size
  });
  closeModal();
});