var slid=document.querySelector('.polosa');
var btn=document.querySelectorAll('.btns');

var count=0;
 function slidermoveLeft() {
 slid.style.left="-475px";
 btn[0].style.background = "black";
 btn[1].style.background="none";

 }
  function slidermoveRight() {
  slid.style.left="0px";
  btn[0].style.background = "none";
  btn[1].style.background="black";
 }
 function autoMove(){
  if (count==0) {
  slid.style.left="-475px";
  btn[0].style.background = "black";
  btn[1].style.background="none";
  count=1;
  }
  else {
  slid.style.left="0px";
  btn[0].style.background = "none";
  btn[1].style.background="black";
  count=0;
  }
 }
 setInterval(autoMove,2000)
