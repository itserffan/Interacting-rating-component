"use strict";

const btnSubmit = document.querySelector(".btn-submit");
const ratingPart = document.getElementById("rating-part");
const thankyouPart = document.getElementById("thankyou-part");
const btnRating = document.querySelectorAll(".rate");
const selectedRatingEl = document.querySelector(".selected-rating");

const valueCheck = function () {
  let value;
  for (let i = 0; i < btnRating.length; i++) {
    if (btnRating[i].value && btnRating[i].checked) value = btnRating[i].value;
  }
  selectedRatingEl.textContent = `You selected ${value} out of 5`;
};

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  ratingPart.classList.toggle("hidden");
  thankyouPart.classList.toggle("hidden");
  valueCheck();
});
