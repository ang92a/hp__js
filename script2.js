import { data } from "./hp.js"; // импорт массива из файла js

let cards = document.querySelector(".cards"); // место отрисовки карточки
let inputSearch = document.querySelector(".search__input"); // поиск
let selectList = document.querySelector("#select"); // select поиск

// ОТТРИСОВЫВАЕТ ОДНУ КАРТОЧКУ
function createCard(obj) {
  let article = document.createElement("div");
  article.className = "article";
  article.innerHTML = `<img class="article__img" src=${obj.image} > 
    <div class="articleText__wrapper">
<p class="article__name">${obj.name}</p>
<p class="article__actor">Actor: ${obj.actor}</p>
<p class="article__gender">Gender: ${obj.gender}</p>
<p class="article__house">House: ${obj.house}</p>
<p class="article__wand">Wand core: ${obj.wand.core}</p>
<p class="article__alive">Alive: ${obj.alive}</p>
    </div> `;
  return article;
}

// ОТРИСОВЫВАЕТ ВСЕ КАРТОЧКИ
function showCards(arr) {
  arr.forEach((elem) => {
    cards.append(createCard(elem));
  });
}

// ТОЧКА ВХОДА
(function main() {
  showCards(data);
})();

// ОТРИСОВЫВАЕТ SELECT

//1. Отрисовываем массив с уникальными значениями HOUSE
export const getSelect = (array) => {
  const house = [];
  array.forEach((obj) => {
    house.push(obj.house);
  });
  return new Set(house);
};

let uniqHouse = getSelect(data);

// 2. Принемает текст создает option и подставляет его
function creteSelect(str) {
  let option = document.createElement("option");
  option.textContent = str;
  option.value = str;
  return option;
}

// 3. Добавляет в select полученные опции из предыдущего пункта 2
uniqHouse.forEach((elem) => {
  selectList.append(creteSelect(elem));
});

//ПОИСК

inputSearch.addEventListener("input", searchData);
selectList.addEventListener("click", searchData);

function searchData() {
  let result = data.filter(
    (obj) =>
      (obj.name.toLowerCase().includes(inputSearch.value.toLowerCase()) &&
        selectList.value === "Choose") ||
      (obj.house.toLowerCase().includes(selectList.value.toLowerCase()) &&
        obj.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
  );
  cards.innerHTML = "";
  showCards(result);
}
