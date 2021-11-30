let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click',() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
  scrollIndicator();
}

function scrollIndicator(){

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  scrollBar.style.width = percentage + '%';

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle('active')
    var panel = this.getElementsByClassName("panel")[0]
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.display = 'none'
    } else {
      panel.style.display = 'unset'
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}