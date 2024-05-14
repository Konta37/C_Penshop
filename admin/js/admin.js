// dropDownMenu
function dropDownList() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-1").classList.toggle("showMenu");
}

//check condition in input "Create Acount"
// let btnCancel = document.getElementsByClassName("cf-cancel");
// btnCancel.onclick = function(){
//   window.location = `./login.html`
// }
const toastifyHTML = document.getElementById(`toastify`);
const toastifyMessageHTML = document.getElementById(`toastify-message`);
const formAddMainHTML = document.getElementById(`form-add`);
const imgProducthiddenHTML = document.getElementById(`image-product`);
const imageProductHTML = document.getElementById(`image-product`);
const pageList = document.getElementById(`page-list`);
const tbodyHTML = document.getElementById(`tbody`);
const buttonSubmitForm = document.getElementById('submit-form');

let imageBase64 = null;
const PRODUCTS = "products_03";

let pageSize = 5;
let totalPage = 1;
let currentPage = 1;

let textSearch = "";
let categoryFilter = "All";

let action = "create";


//Call element from form
const prdName = document.getElementById('name');
const prdType = document.getElementById('productType');
const prdGender = document.getElementById('gender');
const prdCode = document.getElementById('productCode');
const prdSize = document.getElementById('productSize');
const prdColor = document.getElementById('productColor');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const description = document.getElementById('description');
function openForm() {
  formAddMainHTML.classList.remove(`hidden`);
}
function closeForm() {
  formAddMainHTML.classList.add(`hidden`);
}
function render() {
  let realProducts = JSON.parse(localStorage.getItem(PRODUCTS)) || [];
  // console.log(realProducts);
  //lọc theo category
  if (categoryFilter !== "All") {
    realProducts = realProducts.filter(
      (product) => product.gender === categoryFilter
    );
    // console.log(realProducts);
  }
  //lọc theo search (vdu search sam thi hien spham samsung)
  realProducts = realProducts.filter((product) =>
    product.name.toLowerCase().includes(textSearch)
  );

  renderPaginations(realProducts);
  renderProducts(realProducts);
}
render();

//đưa list products ra
function renderProducts(products) {
  let stringHTML = "";
  let start = (currentPage - 1) * pageSize;
  let end = start + pageSize;
  if (end > products.length) {
    end = products.length;
  }
  for (let i = start; i < end; i++) {
    stringHTML += `
                <tr>
                    <td>${products[i].id}</td>
                    <td>${products[i].productCode}</td>
                    <td>
                        <img width="52px" src="${products[i].image}" alt="img">
                    </td>
                    <td>${products[i].name}</td>
                    <td>${products[i].gender}</td>
                    <td>${products[i].productType}</td>
                    <td>${products[i].productSize}</td>
                    <td>${products[i].productColor}</td>
                    <td>${products[i].quantity}</td>
                    <td>${formatMoney(products[i].price)}</td>
                    <td>${products[i].status ? "InStock" : "OutStock"}</td>
                    <td>${products[i].description}</td>
                    <td>
                        <button onClick="initUpdate('${products[i].id}')">Edit</button>
                        <button onClick="changeStatus(${i})">${
      products[i].status ? "OutStock" : "InStock"
    }</button>
                    </td>
                </tr>
            `;
  }
  tbodyHTML.innerHTML = stringHTML;
}
//điều chỉnh số lượng sản phẩm trong trang
function renderPaginations(products) {
  totalPage = Math.ceil(products.length / pageSize);
  let stringHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    if (currentPage === i) {
      stringHTML += `
                <span class="page-item page-active" onClick="clickPage(${i})">${i}</span>
            `;
    } else {
      stringHTML += `
                <span class="page-item" onClick="clickPage(${i})">${i}</span>
            `;
    }
  }
  pageList.innerHTML = stringHTML;
}
//chuyển về tiền việt
function formatMoney(money) {
  return new Intl.NumberFormat(`vi-VN`, {
    style: `currency`,
    currency: `VND`,
  }).format(money);
}

//click vào page mong muốn để hiển sản phẩm
function clickPage(i) {
  currentPage = i;
  render();
}

//click chuyển trang trái phải
function changePage(status) {
  if (status === -1 && currentPage > 1) {
    currentPage -= 1;
  }
  if (status === 1 && currentPage < totalPage) {
    currentPage += 1;
  }
  render();
}
//tăng số lượng product của 1 trang
function changePageSize(e) {
  pageSize = e.target.value;
  currentPage = 1; //đưa về trang 1
  render();
}
//hiện thay đổi theo cate
function changeCategory(e) {
  categoryFilter = e.target.value;
  currentPage = 1;
  render();
}

//check theo input và nút search
function changeTextSearch(e) {
  textSearch = e.target.value.toLowerCase();
  currentPage = 1;
}

//chuyển trạng thái status
function changeStatus(i) {
  const products = JSON.parse(localStorage.getItem(PRODUCTS));
  products[i].status = !products[i].status;
  localStorage.setItem(PRODUCTS, JSON.stringify(products));
  render();
}

function submitForm(e) {
  e.preventDefault();
  // preventDefault()

  const formData = new FormData(e.target);
  const values = {};
  for (let [name, value] of formData.entries()) {
    values[name] = value;
  }
  values.price = +values.price;
  values.quantity = +values.quantity;

  values.image = imageBase64;

  

  //check dk form
  let check = validateFields(values);
  if (check) {
    const products = JSON.parse(localStorage.getItem(PRODUCTS)) || [];
    let id = 1;
    if (products.length > 0) {
      id = products[products.length - 1].id + 1;
    }
    values.id = id;
    values.status = true;
    products.push(values);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
    e.target.reset();
    imageProductHTML.src = "";
    imageBase64 = null;
    closeForm();

    //sdung render lọc các sản phẩm để hiện lên màn hình
    render();
  }
}

//đưa ảnh vào form
function convertToBase64() {
  //khởi tạo biến lấy id inputimage
  const fileInput = document.getElementById(`input-image`);
  //trường hợp có nhiều ảnh thì lấy ảnh đầu tiên
  //Muốn có chọn nhiều ảnh thì thêm multi ở bên input image
  const file = fileInput.files[0];

  //đọc file
  const reader = new FileReader();
  reader.onload = function (event) {
    const base64 = event.target.result;
    imageBase64 = base64;
    imageProductHTML.src = imageBase64;
  };

  reader.readAsDataURL(file);
  //kết thúc đọc file
  imgProducthiddenHTML.classList.remove(`hidden`);
}
function showToast(message) {
  toastifyHTML.classList.toggle(`hidden`);
  toastifyMessageHTML.innerHTML = message;
  const idTimeout = setTimeout(function () {
    toastifyHTML.classList.toggle(`hidden`);
    toastifyMessageHTML.innerHTML = "";
    clearTimeout(idTimeout);
  }, 2000);
}
//funtion check điều kiện
function validateFields(product) {
  // let check = true;
  // if (product.name.length < 4) {
  //   showToast("Name length < 4");
  //   return false;
  // }
  // if (product.price <= 0) {
  //   showToast("Price <= 0");
  //   return false;
  // }
  // if (product.quantity <= 0) {
  //   showToast("Quantity <=0");
  //   return false;
  // }
  // if (product.description.length <= 10) {
  //   showToast("Description <= 10");
  //   return false;
  // }
  // if (!product.image) {
  //   showToast("dont have img");
  //   return false;
  // }
  return check;
}

//Funtion update
function initUpdate(id){
  
  let realProducts = JSON.parse(localStorage.getItem(PRODUCTS)) || [];
  // realProducts.findIndex(+id)
  // realProducts.id.findIndex(id)
  let index = getIndexById(id)

  prdId.value = realProducts[index].id;
  prdName.value = realProducts[index].name;
  prdType.value = realProducts[index].productType;
  prdSize.value = realProducts[index].productSize;
  prdColor.value = realProducts[index].productColor;
  prdCode.value = realProducts[index].productCode;
  price.value = realProducts[index].price;
  quantity.value = realProducts[index].quantity;
  description.value = realProducts[index].description;

  formAddMainHTML.classList.remove(`hidden`);

  buttonSubmitForm.innerText = "Update"

  action = "update";

  //B1: ấy thông tin sản phẩm từ id
  // let index = products.findIndex(product => product.id === id)

  // //B2: Hiển thị dữ liệu cần cập nhật lên form
  // productID.value = products[index].id;
  // ...
  //B3: đổi button add thành update
  //btn
  //B4: không cho phép sửa mã sản phẩm(id)
  //B5: chuyển sang update
}


function getIndexById(id){
  let realProducts = JSON.parse(localStorage.getItem(PRODUCTS));
  return realProducts.findIndex(product=> product.id ==id);
}
function getDataForm(){
  return {
    id: prdId.value,
    name: prdName.value,
    code: prdCode.value,
    gender: prdGender.value,
    type: prdType.value,
    size: prdSize.value,
    color: prdColor.value,
    quantity: quantity.value,
    price: price.value,
    description: description.value,
  };
}
function updateProduct(e){
  e.preventDefault()
  const product = getDataForm();
  let index = getIndexById(product.id);
  let realProducts = JSON.parse(localStorage.getItem(PRODUCTS));
  debugger;
  realProducts[index] = product;
  console.log(product);
  console.log(realProducts[index]);
  action = "create";
  buttonSubmitForm.innerText ="Submit"
  prdId.readOnly=false;
  render();
}