function myfunc() {
  window.alert("Welcome To Blogr");
}

function myLogin(event) {
  event.preventDefault();
  document.window.location("login.html");
}

const faders = document.querySelectorAll(".first");
const faders2 = document.querySelectorAll(".second");
const faders3 = document.querySelectorAll(".third");

const appearOptions = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
faders2.forEach((fader) => {
  appearOnScroll.observe(fader);
});
faders3.forEach((fader) => {
  appearOnScroll.observe(fader);
});
