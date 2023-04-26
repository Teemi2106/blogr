function userlog(event) {
  event.preventDefault();
  var name = document.getElementById("name", "email");
  var password = document.getElementById("password");
  localStorage.getItem("name", "email");
  if ((name in localStorage, password in localStorage)) {
    alert("Welcome To Blogr");
  } else {
    alert("Name or Password not found");
  }
}
