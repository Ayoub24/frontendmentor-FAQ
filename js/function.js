var coll = document.getElementsByClassName("question");
console.log(coll.length)
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var ptag = this.getElementsByTagName("p");
    var arrow = this.getElementsByClassName("arrow")
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      ptag[0].style.fontWeight = "400";
      arrow[0].style.transform = 'rotate(0deg)';
    } else {
      content.style.display = "block";
      ptag[0].style.fontWeight = "700";
      arrow[0].style.transform = 'rotate(180deg)';
    }
  });
}
