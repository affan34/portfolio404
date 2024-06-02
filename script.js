// for respnsive header changer below 1000px
function myFunction(x) {
  if (x.matches) {
    nav.style.display = "flex";
    headlock.style.display="none";
  } else {
    nav.style.display = "none";
    headlock.style.display="flex";
  }
}

var x = window.matchMedia("(max-width: 1000px)");
// Call listener function at run time
myFunction(x);

//  listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
// Script for header size change
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// for menu in smaller MediaDevices
nav.addEventListener("click", () => {

  nav.classList.toggle("fa-bars");
  nav.classList.toggle("fa-xmark");
  head3.classList.toggle("headent");
  nav.classList.toggle("nav2");
  if (headlock.style.display === "none") {
    headlock.style.display = "flex";
  } else {
    headlock.style.display = "none";
  }
  headlock.classList.add("headlock");
});

// for icons of the footer 
iz1.addEventListener("mouseenter", () => {
  iz1.src = "icons8-linkedin-logo-100.png";

})
iz1.addEventListener("mouseleave", () => {
  iz1.src = "icons8-linkedin-100.png";
})
iz2.addEventListener("mouseenter", () => {
  iz2.src = "icons8-github-96 (2).png";

})
iz2.addEventListener("mouseleave", () => {
  iz2.src = "icons8-github-96 (1).png";
})
iz3.addEventListener("mouseenter", () => {
  iz3.src = "icons8-instagram-circle-90 (1).png";

})
iz3.addEventListener("mouseleave", () => {
  iz3.src = "icons8-instagram-circle-90.png";
})
iz4.addEventListener("mouseenter", () => {
  iz4.src = "icons8-twitter-circled-100.png";

})
iz4.addEventListener("mouseleave", () => {
  iz4.src = "icons8-twitter-logo-100.png";
})
// for arrows change in footer
let f = document.getElementById("z7");
let h = document.getElementById("z9");
let i = document.getElementById("z10");
let j = document.getElementById("z11");
let k = document.getElementById("z12");
let l = document.getElementById("z13");
f.addEventListener("mouseenter", () => {
  z5.src = "icons8-right-arrow-100 (1).png";

})
f.addEventListener("mouseleave", () => {
  z5.src = "icons8-right-arrow-100 (2).png";
})
h.addEventListener("mouseenter", () => {
  z14.src = "icons8-right-arrow-100 (1).png";

})
h.addEventListener("mouseleave", () => {
  z14.src = "icons8-right-arrow-100 (2).png";
})
i.addEventListener("mouseenter", () => {
  z15.src = "icons8-right-arrow-100 (1).png";

})
i.addEventListener("mouseleave", () => {
  z15.src = "icons8-right-arrow-100 (2).png";
})
j.addEventListener("mouseenter", () => {
  z16.src = "icons8-right-arrow-100 (1).png";

})
j.addEventListener("mouseleave", () => {
  z16.src = "icons8-right-arrow-100 (2).png";
})
k.addEventListener("mouseenter", () => {
  z17.src = "icons8-right-arrow-100 (1).png";

})
k.addEventListener("mouseleave", () => {
  z17.src = "icons8-right-arrow-100 (2).png";
})
l.addEventListener("mouseenter", () => {
  z18.src = "icons8-right-arrow-100 (1).png";

})
l.addEventListener("mouseleave", () => {
  z18.src = "icons8-right-arrow-100 (2).png";
})
iz1.addEventListener("mouseenter", () => {
  iz1.src = "icons8-linkedin-logo-100.png";

})