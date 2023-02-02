"use strict";

const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
const signUpBtn = document.querySelector(".register-btn");
const introProduct = document.querySelector(".intro__product--info");

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

// =============== DINAMIC ELEMENTS ======================

const cards = [
  {
    id: 1,
    img: "./images/user 1.svg",
    title: "30K",
    description: "User Order",
  },
  {
    id: 2,
    img: "./images/star 7.svg",
    title: "20K",
    description: "Reviews(4.8)",
  },
  {
    id: 3,
    img: "./images/harvest 1.svg",
    title: "300",
    description: "Items",
  },
];

const createElement = (tagName, attrName, attrValues, content) => {
  const element = document.createElement(tagName);

  if (attrName) {
    element.setAttribute(attrName, attrValues);
  }
  if (content) {
    element.innerHTML = content;
  }

  return element;
};

cards.forEach((card) => {
  const newCard = createElement(
    "div",
    "class",
    "card hover:shadow-lg bg-white flex items-center justify-between py-5 pr-11 pl-8 rounded-sm mb-[30px]",

    `<span class="p-4 bg-green-300 rounded-full">
        <img src="${card.img}" alt="img" />
    </span>
    <div class="flex flex-col items-center">
      <h2 class="text-5xl font-normal">${card.title}</h2>
      <p>${card.description}</p>
    </div>`
  );

  introProduct.append(newCard);
});
