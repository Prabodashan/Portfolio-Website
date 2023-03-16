const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(
  ".sub-service,.about,.portfolio,.service,.cta,.contact,.welcome, .contactus,.about-data, .careers",
  {
    delay: 200,
    origin: "bottom",
  }
);

function sendMail() {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  let message = document.forms["contactForm"]["message"].value;
  if (name == "") {
    document.getElementById("error").innerHTML = "Name must be filled out";
    // return false;
  } else if (email == "") {
    document.getElementById("error").innerHTML = "Email must be filled out";
    // return false;
  } else if (!email.match(mailFormat)) {
    document.getElementById("error").innerHTML = "Invalid email address!";
    // return false;
  } else if (message == "") {
    document.getElementById("error").innerHTML = "Message must be filled out";
    // return false;
  } else {
    document.getElementById("success").innerHTML = "Thank you for your message";
  }
  setTimeout(alertFunc, 3000);
}

function alertFunc() {
  document.getElementById("success").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}
