const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.parentElement.nextElementSibling.classList.toggle("active")
    if(this.parentElement.nextElementSibling.classList[1]){
      this.innerHTML = '-';
    } else {
      this.innerHTML = '+';
    }
  })
}