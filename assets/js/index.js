window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function showPromotion() {
  document.getElementById("myModal").style.display = "block";
}

function closePromotion() {
  document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("myModal").style.display = "none";
    }
}
