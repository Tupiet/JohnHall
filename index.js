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
    var text = document.getElementById("textPass");
    var initial = document.getElementById("initial");
    var pincode = document.getElementById("pincode");
    var closed = document.getElementById("closed");

    alert("¡Pin correcto!\nAcceso a archivos privados concedido.");
    initial.style.display = "none";
    pincode.style.display = "none";
    closed.style.display = "block";
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
