var song = new Audio("sounds/song1.mp3");

document.querySelector("button").addEventListener("click",function (){
  document.body.style.backgroundColor = "black";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1").innerHTML = "❤️THIS❤️ <br> IS <br> FOR YOU <br> 🫵";
  document.querySelector("button").remove();


  window.setInterval(function() {
    document.querySelector("h1").innerText = "3";
    document.querySelectorAll("div")[1].innerHTML = "<img src='images/heart.gif'>";
  }, 4000);

  window.setInterval(function() {
    document.querySelector("h1").innerText = "2";
  }, 5000);

  window.setInterval(function() {
    document.querySelector("h1").innerText = "1";
  }, 6000);

  window.setInterval(function() {
    document.querySelector("h1").remove();
    document.querySelectorAll("div")[1].innerHTML = "<img src='images/gf1.jpeg'>";
    song.play();
  }, 7000);

});
