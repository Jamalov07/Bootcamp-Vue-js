let inputText = document.querySelector(".todo__input");
const addButton = document.querySelector(".todo__add-btn");
const allButton = document.querySelector(".all");
const compButton = document.querySelector(".completed");
const unCompButton = document.querySelector(".uncompleted");
const clearAllButton = document.querySelector(".clearall");
const divBody = document.querySelector(".todo");
let ul = document.querySelector(".todo__list");
let workList = [];

window.addEventListener("click", (e) => {
  console.log(e.target);
  addButton.addEventListener("click", () => {
    if (inputText.value) {
      const work = {
        id: ul[ul.length - 1]?.id + 1 || 1,
        name: inputText.value,
        isChecked: false,
      };
      console.log(workList);
      workList.push(work);
      innerHTML(workList);
    } else {
      alert("Nomsiz qo'shishning iloji yo'q");
    }
    let checkBox = document.querySelectorAll(".todo__checkbox");
    console.log(checkBox);
  });

  function toHTML(obj) {
    return `<li class='todo__item'>
  <h3 class='todo__title' >${obj.name}</h3>
  <div class='todo__item-btn'>
      <input class='todo__checkbox' type="checkbox" value=${obj.isChecked} />
      <button class='todo__delete-btn'>Delete</button>
  </div>
</li>`;
  }

  function innerHTML(workList) {
    ul.innerHTML = "";
    let strHTML = "";
    workList.forEach((work) => {
      strHTML += toHTML(work);
    });
    ul.innerHTML = strHTML;
  }
});
