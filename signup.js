function usersign(event) {
  event.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var password2 = document.getElementById("confirm");
  if (password.value === password2.value) {
    localStorage.setItem("Full Name", name.value);
    localStorage.setItem("Email ID", email.value);
    localStorage.setItem("Password", password.value);
    alert("hello");

    document.window.location("index.html");
  } else {
    alert("Passwords not The Same");
  }
}
