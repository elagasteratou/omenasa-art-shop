function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function validateForm() {
  if (
    document.getElementById("name").value.length > 0 &&
    document.getElementById("email").value.length > 0 &&
    document.getElementById("email").validity.valid &&
    document.getElementById("message").value.length > 0
  ) {
    document.getElementById("button").disabled = false;
  }
  if (document.getElementById("email").validity.valid === false) {
    document.getElementById("invalidEmail").innerHTML =
      "Please Enter a Valid Email Address";
  } else {
    document.getElementById("invalidEmail").innerHTML = " ";
  }
}

function showSubmittedText() {
  document.getElementById("submittedText").innerHTML = "Submitted";
}

// test of cards //

// window.onload = function () {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("card").style.display = "block";
// };
