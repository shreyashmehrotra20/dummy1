var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var c="images/"+"dice"+a+".png";
var d="images/"+"dice"+b+".png";
if(a>b){
  document.querySelector("h1").textContent="Shreyash Won "
  document.querySelector(".img1").setAttribute("src",c);
  document.querySelector(".img2").setAttribute("src",d);
}
else if (b>a) {
  document.querySelector("h1").textContent="Sarthak Won "
  document.querySelector(".img1").setAttribute("src",c);
  document.querySelector(".img2").setAttribute("src",d);
}
else{
  document.querySelector("h1").textContent="Both Shreyash and Sarthak won "
  document.querySelector(".img1").setAttribute("src",c);
  document.querySelector(".img2").setAttribute("src",d);
}
