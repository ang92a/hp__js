import { data } from "../data/hp.js";
import { cards } from "./createCard.js";
import { createCard } from "./createCard.js";
import { showCards } from "./createCard.js";
import { selectList } from "./creteSelect.js";

let inputSearch = document.querySelector(".search__input"); // поиск

//ПОИСК

inputSearch.addEventListener("input", searchData); // события для поиска
selectList.addEventListener("click", searchData); // событие для select

function searchData() {
  let result = data
    .filter((obj) => obj.house.includes(selectList.value))
    .filter((obj) =>
      obj.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    );
  cards.innerHTML = "";
  showCards(result);
}
