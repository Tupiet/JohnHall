function logIn() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "John Hall" && password.value == "3405") {
    window.open("../");
  }
}