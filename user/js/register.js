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
  let form  =document.getElementById("CustomerRegisterForm");
  // console.log(form);
  // console.log(form.firstname);
  let firstName = document.getElementById("CustomerFirstName");
  let lastName = document.getElementById("CustomerLastName");
  let cfLasttName = document.getElementById("ul-last-name-cf");
  let cfFirstName = document.getElementById("ul-first-name-cf");
  // console.log(cfFirstName.style);

  function checkFName(){
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
  function checkLName(){
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