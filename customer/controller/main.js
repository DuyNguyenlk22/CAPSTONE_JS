const BASE_URL = "https://64d6fadf2a017531bc12e6f4.mockapi.io/product";
let dsProduct = [];

let cart = [];
console.log("🚀 ~ file: main.js:2 ~ dsProduct:", dsProduct);
let fetchProductList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      console.log("🚀 ~ file: main.js:7 ~ .then ~ res:", res.data);
      dsProduct.push(...res.data);
      renderProductList(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ file: main.js:11 ~ fetchProductList ~ err:", err);
    });
};
fetchProductList();
let data = localStorage.getItem("list");
if (data != null) {
  cart = JSON.parse(data);
  countProduct();
  renderCart(cart);
}
function changeList() {
  let dsApple = [];
  let dsSamSung = [];
  let select = document.getElementById("brands").value;
  if (select == "iphone") {
    dsProduct.forEach((item) => {
      if (item.type === "iphone") {
        dsApple.push(item);
      }
    });
    renderProductList(dsApple);
  } else if (select === "Samsung") {
    dsProduct.forEach((item) => {
      if (item.type === "Samsung") {
        dsSamSung.push(item);
      }
    });
    renderProductList(dsSamSung);
  } else {
    renderProductList(dsProduct);
  }
}

let deleteItem = (id) => {
  let index = findIndex(id, cart);
  cart.splice(index, 1);
  countProduct();
  renderCart(cart);
  let jsonData = JSON.stringify(cart);
  localStorage.setItem("list", jsonData);
};

let emptyCart = () => {
  cart.splice(0, cart.length);
  countProduct();
  renderCart(cart);
  let jsonData = JSON.stringify(cart);
  localStorage.setItem("list", jsonData);
};

let payCart = () => {
  if (cart.length !== 0) {
    cart.splice(0, cart.length);
    showMessage("", "Your order is complete", "success");
    countProduct();
    renderCart(cart);
    let jsonData = JSON.stringify(cart);
    localStorage.setItem("list", jsonData);
  } else {
    showMessage("Error!", "Your cart is empty", "error");
  }
};

//countinue shopping
document.getElementById("countinue").addEventListener("click", () => {
  document.getElementById("btn__cart").click();
});

// button close in cart
document.getElementById("closeCart").addEventListener("click", () => {
  document.getElementById("btn__cart").click();
});
