"use strict";

const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
const signUpBtn = document.querySelector(".register-btn");

signUpBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-window")) {
    modalContent.classList.toggle("shaker");
  }
});
