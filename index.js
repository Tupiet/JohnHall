function logIn() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "John Hall" && password.value == "34105") {
    window.open("../miarea");
  }
}

function selectPin1() {
  var one = document.getElementById("buttonOne");
  var text = document.getElementById("textPass");

  text.value = "1";
}

function selectPin2() {
  var two = document.getElementById("buttonTwo");
  var text = document.getElementById("textPass");

  if (text.value == "13") {
    text.value = "132";
  } else {
    text.value = "";
  }
}

function selectPin3() {
  var three = document.getElementById("buttonThree");
  var text = document.getElementById("textPass");

  if (text.value == "1") {
    text.value = "13";
  } else {
    text.value = "";
  }
}

function verifyPinPersonal() {
  var text = document.getElementById("textPass");
  var pincode = document.getElementById("pincode");
  var closed = document.getElementById("closed");

  if (text.value == "132") {
    alert("¡Pin correcto!\nAcceso a archivos privados concedido.");
    pincode.style.display = "none";
    closed.style.display = "block";
  }
}