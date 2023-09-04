fetchPhoneList();

let deletePhone = (id) => {
  console.log(id);
  axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log("🚀 ~ file: main.js:8 ~ .then ~ res:", res);
      fetchPhoneList();
      showMessage("Xoá Thành Công !!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
let addPhone = () => {
  let data = layThongTinTuForm();
  // start validate
  //tenSV
  let isValidID =
    kiemTraRong("tbID", data.id) &&
    kiemTraDoDai(4, 6, "tbID", data.id) &&
    kiemTraDuLieuLaSo("tbID", data.id);
  let isValidPhoneName = kiemTraRong("tbName", data.name);
  let isValidPrice =
    kiemTraRong("tbPrice", data.price) &&
    kiemTraDuLieuLaSo("tbPrice", data.price);
  let isValidScreen = kiemTraRong("tbScreen", data.screen);
  let isValidBackCam = kiemTraRong("tbBC", data.backCamera);
  let isValidFontCam = kiemTraRong("tbFC", data.frontCamera);
  let isValidIMG = kiemTraRong("tbImg", data.img);
  let isValidDesc = kiemTraRong("tbDesc", data.desc);
  let isValidSelect = kiemTraRong("tbSelect", data.type);
  //
  let isValid =
    isValidID &
    isValidPhoneName &
    isValidPrice &
    isValidScreen &
    isValidBackCam &
    isValidFontCam &
    isValidIMG &
    isValidDesc &
    isValidSelect;
  if (!isValid) return;
  // nếu ko hợp lệ thì dừng tại dòng tren
  // end validate

  console.log(data);
  axios
    .post(BASE_URL, data)
    .then((res) => {
      document.getElementById("close-button").click();
      fetchPhoneList();
      showMessage("Thêm Thành Công !!!");
      document.getElementById("formProduct").reset();
    })
    .catch((err) => {
      console.log(err);
    });
};
let editPhone = (id) => {
  console.log(id);
  document.getElementById("id").readOnly = true;
  axios
    .get(`${BASE_URL}/${id}`)
    .then((res) => {
      document.getElementById("open-modal").click();
      showThongTinLenForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
let updatePhone = () => {
  let data = layThongTinTuForm();
  // let url = `${BASE_URL}/${data.name}`;
  axios
    .put(`${BASE_URL}/${data.id}`, data)
    .then((res) => {
      console.log(res);
      document.getElementById("close-button").click();
      showMessage("Cập nhật thành công !!!");
      fetchPhoneList();
    })
    .catch((err) => {
      console.log(err);
    });
};
let timNhanVien = () => {
  var input, filter, tbody, tr, a, i, txtValue;
  input = document.getElementById("searchName");
  filter = input.value.toUpperCase();
  tbody = document.getElementById("tbodyProduct");
  tr = tbody.getElementsByTagName("tr");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    a = tr[i].getElementsByTagName("td")[1];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
};

// function swap(arr, a, b) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }
// const Compare = {
//   LESS_THAN: -1,
//   BIGGER_THAN: 1,
// };
// function bubbleSort(arr, compare = defaultCompare) {
//   const { length } = arr;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1 - i; j++) {
//       // refer to note below
//       if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }
// let data = () => {
//   axios({
//     url: BASE_URL,
//     method: "GET",
//   })
//     .then((res) => {
//       console.log(res);
//       renderPhoneList(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
let sapXepGiamDan = () => {
  location.reload();
  let mangSPTheoGiaTien = dsProduct1.sort((a, b) => {
    return b.price - a.price;
  });
  renderPhoneList(mangSPTheoGiaTien);
};

let sapXepTangDan = () => {
  location.reload();
  let mangSPTheoGiaTien = dsProduct1.sort((a, b) => {
    return a.price - b.price;
  });
  renderPhoneList(mangSPTheoGiaTien);
};
