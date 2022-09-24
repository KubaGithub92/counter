const btnDecrease = document.querySelector(".button_decrease");
const btnReset = document.querySelector(".button_reset");
const btnIncrease = document.querySelector(".button_increase");
const number = document.querySelector(".number");
const body = document.querySelector("body");

let counter = 0;
const checkNegative = () => {
  if (counter < 0) {
    body.style.background = "orangered";
  }

  if (counter >= 0) {
    body.style.background = "antiquewhite";
  }
};

btnIncrease.addEventListener("click", function () {
  counter++;
  number.innerHTML = `${counter}`;
  checkNegative();
  return counter;
});

btnDecrease.addEventListener("click", function () {
  counter--;
  number.innerHTML = `${counter}`;
  checkNegative();
  return counter;
});

btnReset.addEventListener("click", () => {
  counter = 0;
  number.innerHTML = `${counter}`;
  checkNegative();
  return counter;
});
