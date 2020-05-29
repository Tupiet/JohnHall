function logIn() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var start = document.getElementById("start");
  var pin = document.getElementById("pinIntroduce");

  if (username.value == "John Hall" && password.value == "TengoLaBancaAMiPoder") {
    start.style.display = "none";
    pinIntroduce.style.display = "block";
  }
}

function selectPin0() {
  var number = document.getElementById("buttonOne");
  var text = document.getElementById("textPass");

  text.value = "0";
}