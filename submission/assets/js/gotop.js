let mybutton = document.getElementById("topbutton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        document.querySelector(target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: "center",
        });
    });
}