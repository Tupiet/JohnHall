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
  var text = document.getElementById("pinIntroduce");

  text.value = "0";
}

function selectPin4() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "0") {
    text.value = "04";
  } else {
    text.value = "";
  }
}

function selectPin5() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "04") {
    text.value = "045";
  } else {
    text.value = "";
  }
}

function selectPin3() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "045") {
    text.value = "0453";
  } else {
    text.value = "";
  }
}

function selectPin7() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "0453") {
    text.value = "04537";
  } else {
    text.value = "";
  }
}

function selectPin6() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "04537") {
    text.value = "045376";
  } else {
    text.value = "";
  }
}

function selectPin2() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "045376") {
    text.value = "0453762";
  } else {
    text.value = "";
  }
}

function selectPin1() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "0453762") {
    text.value = "04537621";
  } else {
    text.value = "";
  }
}

function selectPin9() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "04537621") {
    text.value = "045376219";
  } else {
    text.value = "";
  }
}

function selectPin8() {
  var text = document.getElementById("pinIntroduce");

  if (text.value == "045376219") {
    text.value = "0453762198";
    alert("Hoola");
  } else {
    text.value = "";
  }
}