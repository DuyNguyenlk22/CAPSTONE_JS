let renderProductList = (list) => {
  let content = "";
  list.forEach((item) => {
    let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
      item;
    let theDiv = `<div class="product__item" id="productItem-${id}">
        <div class="product__info">
          <img
            src="${img}"
            alt=""
            class="w-full rounded-md mb-4"
          />
          <h3 class="text-center font-bold text-xl">${name}</h3>
          <p class="text-center">${price}</p>
          <span class="brand">${type}</span>
          <p>
            <span class="font-semibold">Description:</span>${desc}
          </p>
        </div>
        <div class="product__desc flex flex-col justify-evenly">
          <h2>Specifications</h2>
          <div class="extra__desc">
            <p><span>Screen :</span> ${screen}</p>
            <p><span>Back Camera :</span> ${backCamera}</p>
            <p><span>Front Camera :</span> ${frontCamera}</p>
          </div>
          <a href="#">Click here for more details</a>
          <div class="btn__addCart flex flex-col items-center">
            <button id="addProduct" onclick="addProductToCart(${id})">Add To Cart</button>
          </div>
        </div>
      </div>`;
    content += theDiv;
  });
  document.getElementById("productList").innerHTML = content;
};

let addProductToCart = (id) => {
  let selectItem = id;

  let search = cart.find((x) => x.id === selectItem);
  console.log(
    "🚀 ~ file: controller.js:47 ~ addProductToCart ~ search:",
    search
  );

  if (search === undefined) {
    let cartItem1 = {
      id: selectItem,
      product: dsProduct[selectItem - 1],
      quantity: 1,
    };
    cart.push(cartItem1);
  } else {
    search.quantity += 1;
  }
  console.log(
    "🚀 ~ file: controller.js:40 ~ addProductToCart ~ selectItem:",
    cart
  );

  countProduct();
  renderCart(cart);
  let jsonData = JSON.stringify(cart);
  localStorage.setItem("list", jsonData);
};
let countProduct = () => {
  let cartIcon = document.getElementById("countNumber");
  cartIcon.innerHTML = cart.map((x) => x.quantity).reduce((x, y) => x + y, 0);

  // console.log(cart.map((x) => x.item).reduce((x, y) => x + y, 0));
};

let renderCart = (list) => {
  let contentCart = "";
  let subBill = 0;
  let totalBill = 0;
  list.forEach((item) => {
    let { id, product, quantity } = item;
    let info = `
    <div class="cart__item-${id}">
                  <div class="cart__product flex mt-5 mb-3">
                    <div class="cart__img w-1/3">
                      <img
                        src=${product.img}
                      />
                    </div>
                    <div class="cart__desc w-2/3 ml-3">
                      <div class="desc__product text-black text-xs">
                        <h3 class="font-semibold">${product.name}</h3>
                        <p>Screen : ${product.screen}</p>
                        <p>Back Camera : ${product.backCamera}</p>
                        <p>Front Camera :${product.frontCamera}</p>
                        <a  class="text-red-500 underline cursor-pointer" onclick = "deleteItem(${id})">Remove</a>
                      </div>
                    </div>
                  </div>
                  <div class="cart__bottom flex justify-between items-center">
                    <div class="cart__quantity flex">
                      <p>Quantity :</p>
                      <button onclick="decrement(${id})">-</button>
                      <p class="mx-4 quantity ">${quantity}</p>
                      <button onclick="increment(${id})">+</button>
                    </div>
                    <div class="cart__price rounded inline-block p-1 bg-gray-300">
                      <p>$${(product.price * quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
    `;
    contentCart += info;
    subBill += product.price * quantity;
    totalBill = subBill * (1 + 0.1) + 10;
  });
  document.getElementById("subTotal").innerHTML =
    subBill.toLocaleString() + "$";
  document.getElementById("TotalBill").innerHTML =
    totalBill.toLocaleString() + "$";
  document.getElementById("cartList").innerHTML = contentCart;
};

let decrement = (id) => {
  let search = cart.find((x) => x.id == id);
  if (search.quantity == 0) return;
  else {
    search.quantity -= 1;
  }
  countProduct();
  renderCart(cart);
  let jsonData = JSON.stringify(cart);
  localStorage.setItem("list", jsonData);
};
let increment = (id) => {
  let search = cart.find((x) => x.id == id);
  search.quantity += 1;
  countProduct();
  renderCart(cart);
  let jsonData = JSON.stringify(cart);
  localStorage.setItem("list", jsonData);
};

let findIndex = (id, array) => {
  return array.findIndex((item) => item.ma == id);
};

let showMessage = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: "Ok",
  });
};
