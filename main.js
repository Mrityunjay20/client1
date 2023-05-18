import './style.css'

console.log("hello world");

var typing=new Typed(".text", {
       strings: ["", "RESEARCH", "INNOVATE", "CREATE"],
       typeSpeed: 70,
       backSpeed: 20,
       loop: true,
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}