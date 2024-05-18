// dropDownMenu
function dropDownList() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-1").classList.toggle("showMenu");
}
function dropDownList2() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-2").classList.toggle("showMenu");
}
function dropDownList3() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-3").classList.toggle("showMenu");
}
function dropDownList4() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-4").classList.toggle("showMenu");
}
function dropDownList5() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-5").classList.toggle("showMenu");
}
function dropDownList6() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-6").classList.toggle("showMenu");
}
function dropDownList7() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-7").classList.toggle("showMenu");
}
function dropDownList8() {
  // document.getElementById("Linklist-3").classList.toggle("showMenu");
  document.getElementById("Linklist-8").classList.toggle("showMenu");
}

//check condition in input "Create Acount"
// let btnCancel = document.getElementsByClassName("cf-cancel");
// btnCancel.onclick = function(){
//   window.location = `./login.html`
// }
let form = document.getElementById("CustomerRegisterForm");
// console.log(form);
// console.log(form.firstname);
// console.log(cfFirstName.style);
let cfError = document.querySelectorAll(".cf-error");
console.log(cfError);
// cfError[1].innerHTML = `<li>Must not be blank</li>`;
// console.log(cfError[1]);

form.onsubmit = function (e) {
  e.preventDefault();
  let firstname = form.firstname.value;
  let lastname = form.lastname.value;
  let usermail = form.usermail.value;
  let userphone = form.userphone.value;
  let userdate = form.userdate.value;

  let errorMessage = "";
  //Check blank
  if (!firstname) {
    errorMessage = `<li>Must not be blank</li>`;
    cfError[0].innerHTML = errorMessage;
  } else if (firstname.length < 2) {
    errorMessage = `<li>First name must be more than 1 character</li>`;
    cfError[0].innerHTML = errorMessage;
  }

  if (!lastname) {
    errorMessage = `<li>Must not be blank</li>`;
    cfError[1].innerHTML = errorMessage;
  } else if (lastname.length < 2) {
    errorMessage = `<li>First name must be more than 1 character</li>`;
    cfError[1].innerHTML = errorMessage;
  }

  if (!usermail) {
    errorMessage = `<li>Must not be blank</li>`;
    cfError[2].innerHTML = errorMessage;
  }
  if (!userphone) {
    errorMessage = `<li>Must not be blank</li>`;
    cfError[3].innerHTML = errorMessage;
  }
  if (!userdate) {
    errorMessage = `<li>Must not be blank</li>`;
    cfError[4].innerHTML = errorMessage;
  }
  //check user first name and last name
};
function checkFName() {
  // let cfError = document.querySelectorAll("cf-error");
  // console.log(cfError);
  // for (let index = 2; index <= 6; index++) {
  //   inputcheck.onchange(function check(){
  //   })
  // }
  // let regex = /[A-Z]/i;
  // if (form.firstname.value.length == 0) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>Must not be blank</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>Must not be blank</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfFirstName.style.opacity ="1";
  //   return;
  // }
  // if (!regex.test(form.firstname.value)) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>Name does not have number</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>Name does not have number</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfFirstName.style.opacity ="1";
  //   return;
  // }
  // if (form.firstname.value.length < 2) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>First name must be more than 1 character</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>First name must be more than 1 character</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfFirstName.style.opacity ="1";
  //   return;
  // }
  // cfFirstName.style.opacity=0;
  // cfLasttName.style.opacity=0;
}
function checkLName() {
  // let regex = /[A-Z]/i;
  // if (form.lastname.value.length == 0) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>Must not be blank</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>Must not be blank</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfLasttName.style.opacity ="1";
  //   return;
  // }
  // if (!regex.test(form.lastname.value)) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>Name does not have number</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>Name does not have number</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfLasttName.style.opacity ="1";
  //   return;
  // }
  // if (form.lastname.value.length < 2) {
  //   cfFirstName.innerHTML=
  //   `
  //   <li>First name must be more than 1 character</li>
  //   `;
  //   cfLasttName.innerHTML=
  //   `
  //   <li>First name must be more than 1 character</li>
  //   `;
  //   cfLasttName.style.display = "block";
  //   cfFirstName.style.display = "block";
  //   cfLasttName.style.opacity ="1";
  //   return;
  // }
  // cfFirstName.style.opacity=0;
  // cfLasttName.style.opacity=0;
}
