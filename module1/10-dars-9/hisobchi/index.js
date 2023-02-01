const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const counter = document.querySelector(".counter");

decrement.addEventListener("click", () => {
    console.log(counter.textContent == '0')
  if (counter.textContent == '0') {
    alert("Buning iloji yo'q");
  } else {
    counter.innerHTML = +counter.textContent - 1;
  }
});

increment.addEventListener("click", () => {
  counter.innerHTML = +counter.textContent + 1;
});
