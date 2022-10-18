var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elBtn = elForm.querySelector(".js-btn");
var elFizzAlert = document.querySelector(".js-fizz");
var elBuzzAlert = document.querySelector(".js-buzz");
var elFizzBuzzAlert = document.querySelector(".js-fizzbuzz");
var elErrorAlert = document.querySelector(".js-error-alert");

var fizz = [];
var buzz = [];
var fizzBuzz = [];

elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();

   var elInputValue = Number(elInput.value);

   if (elInputValue % 3 == 0 && elInputValue % 5 == 0) {
      fizz.push(elInputValue);
      buzz.push(elInputValue);
      fizzBuzz.push(elInputValue);

      elFizzAlert.textContent = fizz.join(", ");
      elBuzzAlert.textContent = buzz.join(", ");
      elFizzBuzzAlert.textContent = fizzBuzz.join(", ");
      elErrorAlert.classList.add("d-none");
   } else if (elInputValue % 3 == 0) {
      fizz.push(elInputValue);

      elFizzAlert.textContent = fizz.join(", ");
      elErrorAlert.classList.add("d-none");
   } else if (elInputValue % 5 == 0) {
      buzz.push(elInputValue);

      elBuzzAlert.textContent = buzz.join(", ")
      elErrorAlert.classList.add("d-none");
   }
   else {
      elErrorAlert.classList.add("d-block");
      elErrorAlert.classList.remove("d-none");
      elErrorAlert.textContent = `${elInputValue} This number is not divisible by 3 or 5`;
   }

   elForm.reset();
})