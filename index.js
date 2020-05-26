function logIn() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "John Hall" && password.value == "34105") {
    window.open("../miarea");
  }
}

function selectPin() {
  var one = document.getElementById("buttonOne");
  var two = document.getElementById("buttonTwo");
  var three = document.getElementById("buttonThree");
  var text = document.getElementById("textPass");

  text = "1";
}

function verifyPinPersonal() {
  var text = document.getElementById("textPass");

  if (text.value == "1") {
    alert("Hola");
  }
}