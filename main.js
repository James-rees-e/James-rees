var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

let main = document.getElementById("main")
let info = document.getElementById("info")
let info2 = document.getElementById("info2")
let sale = document.getElementById("sale")
let tales = document.getElementById("tales")

let MP = document.getElementById("MP")
let AAA = document.getElementById("AAA")

let how = document.getElementById("how")
let bread = document.getElementById("bread")




tales.addEventListener("click", function () {
  AAA.classList.remove("hidden")
})
main.addEventListener("click", function () {
  MP.classList.remove("hidden")
  bread.classList.add("hidden")
  AAA.classList.add("hidden")
  how.classList.add("hidden")
})

info.addEventListener("click", function () {
  MP.classList.remove("hidden")
  bread.classList.add("hidden")
  AAA.classList.add("hidden")
  how.classList.add("hidden")
})

info2.addEventListener("click", function () {
  how.classList.remove("hidden")
  MP.classList.add("hidden")
  AAA.classList.add("hidden")
  bread.classList.add("hidden")
})



sale.addEventListener("click", function () {
  bread.classList.remove("hidden")
  how.classList.add("hidden")
  AAA.classList.add("hidden")
  MP.classList.add("hidden")
})