const BASE_URL = "https://64d6fadf2a017531bc12e6f4.mockapi.io/product";
let dsProduct1 = [];
console.log("🚀 ~ file: controller.js:3 ~ dsProduct1:", dsProduct1);

let renderPhoneList = (list) => {
  let contentHTML = "";
  list.forEach((phone) => {
    let { id, name, price, img, desc } = phone;
    let trString = /* html */ `
                        <tr>
                            <td class="text-center">${id}</td>
                            <td class="text-center">${name}</td>
                            <td class="text-center">${price}</td>
                            <td class="flex flex-col items-center py-3">
                            <img class="w-1/3" src=${img} alt="">
                            </td>
                            <td>${desc}</td>
                            <td class="">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-1 rounded w-1/2" onclick="editPhone(${id})">Edit</button>
                                <button class="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-1 rounded w-1/2" onclick="deletePhone(${id})">Delete</button>
                            </td>
                        </tr>
        `;
    contentHTML += trString;
  });
  document.getElementById("tbodyProduct").innerHTML = contentHTML;
};
let fetchPhoneList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      renderPhoneList(res.data);
      dsProduct1.push(...res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
let showMessage = (message, isSuccess = true) => {
  Toastify({
    text: message,
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};

let layThongTinTuForm = () => {
  let id = document.getElementById("id").value;
  let name = document.getElementById("phone-name").value;
  let price = document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let back_camera = document.getElementById("back-camera").value;
  let font_camera = document.getElementById("font-camera").value;
  let img = document.getElementById("img").value;
  let description = document.getElementById("description").value;
  let type = document.getElementById("type").value;
  return {
    id,
    name,
    price,
    screen,
    back_camera,
    font_camera,
    img,
    description,
    type,
  };
};
let showThongTinLenForm = (phone) => {
  let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
    phone;
  document.getElementById("id").value = id;
  document.getElementById("phone-name").value = name;
  document.getElementById("price").value = price;
  document.getElementById("screen").value = screen;
  document.getElementById("back-camera").value = backCamera;
  document.getElementById("font-camera").value = frontCamera;
  document.getElementById("img").value = img;
  document.getElementById("description").value = desc;
  document.getElementById("type").value = type;
};
