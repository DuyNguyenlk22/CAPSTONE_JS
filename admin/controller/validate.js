//hợp lệ => return true

function kiemTraRong(idErr, value) {
    //lỗi
    if (value.trim().length == 0) {
        document.getElementById("tbID").style.display = "block";
        document.getElementById("tbName").style.display = "block";
        document.getElementById("tbPrice").style.display = "block";
        document.getElementById("tbScreen").style.display = "block";
        document.getElementById("tbBC").style.display = "block";
        document.getElementById("tbFC").style.display = "block";
        document.getElementById("tbImg").style.display = "block";
        document.getElementById("tbDesc").style.display = "block";
        document.getElementById(idErr).innerText = "Nội dung không được để trống";
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraDoDai(min, max, idErr, value) {
    //trim : remove khoang trang
    var length = value.trim().length;
    if (length < min || length > max) {
        document.getElementById(idErr).innerText = `Nội dung phải từ ${min} đến ${max} kí tự`;
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}
function kiemTraChu(idErr, value) {
    var re = new RegExp("^[A-Za-z]+$");
    if (re.test(value)) {
        document.getElementById("tbName").style.display = "block";
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbName").style.display = "block";
        document.getElementById(idErr).innerText = "Tên phải là chữ";
        return false;
    }
}
function kiemTraSelect(index){
    var select = document.getElementById("type");
    if(select.selectedIndex == 0){
        document.getElementById("type").style.display = "block";
        document.getElementById(index).innerText = "Vui lòng chọn chức vụ";
        return false;
    } else {
        document.getElementById(index).innerText = "";
        return true;
    }
}
function kiemTraDuLieuLaSo(idErr, inputValue){
    var number = /^[0-9]+$/;
    if(inputValue.match(number)){
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById("tbID").style.display = "block";
        document.getElementById("tbPrice").style.display = "block";
        document.getElementById(idErr).innerText = "Trường dữ liệu này phải là số";
        return false;
    }
}