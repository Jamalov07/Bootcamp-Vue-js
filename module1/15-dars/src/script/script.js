"use strict";

let them = document.querySelector("#them");
let header = document.querySelector("header");
let select = document.querySelector("#region");
let modetext = document.querySelector(".modetext");
them.addEventListener("input", (e) => {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  changeMode();
});

function changeMode() {
  let card = document.querySelectorAll(".card");
  let mode = localStorage.getItem("theme");

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
    header.classList.remove("bg-white");
    header.classList.add("text-white");
    header.classList.add("bg-[#2B3844]");
    header.classList.remove("text-black");
    document.body.classList.add("bg-[#202C36]");
    document.body.classList.remove("bg-[#f2f2f2]");
    card.forEach((car) => {
      car.classList.add("text-white");
      car.classList.remove("text-gray-900");
      car.classList.remove("bg-white");
      car.classList.add("bg-[#2B3844]");
    });
    modetext.textContent = "Light Mode";
  } else {
    document.documentElement.classList.remove("dark");
    header.classList.add("text-black");
    header.classList.remove("text-white");
    header.classList.remove("bg-[#2B3844]");
    header.classList.add("bg-white");
    document.body.classList.remove("bg-[#202C36]");
    document.body.classList.add("bg-[#f2f2f2]");
    card.forEach((car) => {
      car.classList.remove("text-white");
      car.classList.add("text-gray-900");
      car.classList.remove("bg-[#2B3844]");
      car.classList.add("bg-white");
    });
    modetext.textContent = "Dark Mode";
  }
  console.log(localStorage.theme);
}

// ================= Dynamic Card Mode =================

let baseUrl = "https://restcountries.com/v2/all";
let filterUrl = "https://restcountries.com/v2/region";
let searchUrl = "https://restcountries.com/v2/name";
let wrapperCards = document.querySelector(".card__wrapper");

const getAllCountries = async () => {
  wrapperCards.innerHTML =
    "<div class='flex items-center justify-center h-screen w-screen'><span class='loader'></span></div>";
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    if (response.status === 200) {
      renderCards(result);
      filterRegion(result);
    }
    return result;
  } catch (error) {
    console.log("Error message", error);
  }
};

getAllCountries();

// =========== render cards ============

async function renderCards(cards) {
  wrapperCards.innerHTML = "";
  if (cards.length) {
    cards.forEach((element) => {
      const card = createElement(
        "div",
        "card rounded-[5px] dark:bg-black dark:text-white shadow-lg bg-white max-w-sm w-[264px] min-h-[336px]",
        `<a href="#!">
     <img
       class="rounded-t-lg w-full h-[160px]"
       src="${element.flags.svg}"
       alt=""
     />
   </a>
   <div class="p-6 pb-7">
     <h5 class=" text-xl font-medium mb-2 card_title" data-isname="${element.name}">
       ${element.name}
     </h5>

     <ul class="list-none">
       <li><strong>Population: </strong>${element.population}</li>
       <li><strong>Region: </strong>${element.region}</li>
       <li><strong>Capital: </strong>${element.capital}</li>
     </ul>
   </div>`
      );

      card.dataset.isname = element.name;
      wrapperCards.append(card);
    });
  }
}

// =================== dynamic select option ===================

function filterRegion(data) {
  const region = [];
  data.forEach((item) => {
    if (!region.includes(item.region)) {
      region.push(item.region);
    }
  });
  // select.innerHTML = "";
  region.sort();
  region.forEach((item) => {
    const option = createElement("option", "item", item);
    select.append(option);
  });
}

async function filterByRegion(region) {
  wrapperCards.innerHTML =
    "<div class='flex items-center justify-center w-screen h-screen'><span class='loader'></span></div>";
  const response = await fetch(`${filterUrl}/${region}`);
  const result = await response.json();
  renderCards(result);
}

select.addEventListener("change", (e) => {
  wrapperCards.innerHTML = "";
  filterByRegion(e.target.value);
});

// =================== dynamic select option ===================

// ==================== search ========================

async function searchCountries(country) {
  try {
    const response = await fetch(`${searchUrl}/${country}`);
    const result = await response.json();
    if (response.status === 200) {
      renderCards(result);
    } else {
      wrapperCards.innerHTML = `<div class='w-screen text-5xl font-bold text-red-800 text-center'>${country} NOT FOUND!</div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

let searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length > 0) {
    wrapperCards.innerHTML = "";
    searchCountries(e.target.value);

    wrapperCards.innerHTML =
      "<div class='flex items-center justify-center uppercase w-screen h-screen'><span class='loader'></span></div>";
  } else {
    searchInput.setAttribute("placeholder", "please enter a country name");
    getAllCountries();
  }
});

wrapperCards.addEventListener("click", (e) => {
  // if (
  //   e.target.classList.contains("card") ||
  //   e.target.classList.contains("card_title")
  // ) {
  //   console.log(123456);
  //   const cardName =
  //     e.target.getAttribute("isname") === undefined
  //       ? null
  //       : e.target.getAttribute("isname");
  //   const isname = cardName || e.target.textContent;
  //   console.log(isname);
  // }

  if (e.target.classList.contains("card_title")) {
    const isname = e.target.getAttribute("data-isname");
    localStorage.setItem("isname", isname);
    window.open("./country.html");
  }
});

changeMode();
