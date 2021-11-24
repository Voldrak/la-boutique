function setCartProductsNum() {
return(cartProductNum.textContent = `Numero prodotti: ${cartList.length}`
  );
}

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute("id", idProduct)

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener('click', (e) => {
  // console.log(parseInt(e.currentTarget.id));
  cartList.push(
    productList.find(
      (product) => parseInt(e.currentTarget.id) === product.id));
      setCartProductsNum()
    alert('Prodotto aggiunto nel carrello')

    localStorage.setItem('totCartitem', cartList.length)

  })
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(
      wrapperProducts,
       product.image,
        product.title,
         product.price,
          product.id
         );
  });
  
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  // productList = data;

  return renderProducts(data);
};


// const prodotto = document.querySelectorAll(".wrapper__products");

// prodotto.forEach((el) =>
// el.addEventListener("click", (e) => {
//   console.log(el);
// })
// );


// Hero change img


function imgHero(){
setTimeout (() => {
  document.querySelector(".overlay").className = "overlay2";
  
  setTimeout(() => {
  document.querySelector(".overlay2").className = "overlay3";
  
  setTimeout(() => {
  document.querySelector(".overlay3").className = "overlay";
  
  },3000);
  },3000);
  },3000);
}

  window.onload = setInterval(function(){imgHero();}, 9000);

  const wrapperProducts = document.querySelector(".wrapper__products");
  let productList = [];


  // PARTE INERENTE ALLA LOGICA DEL CARRELLO

  const localStorage = localStorage.getItem("totCartitems")
  const clearCartBtn = document.querySelector(".clearCartBtn")
  const cartBtn = document.querySelector(".cartBtn");
  const cartProductNum = document.querySelector(".cartProductNum");
  const cartList = [];
  
  // FLUSSO GENERALE

  cartProductNum.textContent = `Numero prodotti: ${localStorageTot}`;
  getProductsList();


clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  setCartProductsNum();
});


  
  // Cerca prodotto

//   function cercalo(){
//   let prodotto = document.querySelectorAll(".wrapper__products");
//   const input = document.querySelector(".cercaP");


//   input.addEventListener('keyup', (event) => {
//     renderProducts(listItems)

//     const value = input.value.toLowerCase();
  
//     const results = product.filter((el) => 
//     el.title.toLowerCase().search(value) > -1
//   );
//   render(prodotto, results)
//   });
// }

