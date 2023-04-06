import { data } from "./hp.js"; // импорт массива из файла js

let cards = document.querySelector(".cards");
let inputSearch = document.querySelector(".search__input");
let selectList = document.querySelector("#select");

// Отрисовывает одну карточку
function createCard(obj) {
  let article = document.createElement("div");
  article.setAttribute("class", "article");

  let articleImg = document.createElement("img");
  articleImg.setAttribute("src", obj.image);
  articleImg.setAttribute("class", "article__img");
  articleImg.setAttribute("alt", "Image");

  let articleText = document.createElement("div");
  articleText.setAttribute("class", "articleText__wrapper");

  let articleName = document.createElement("p");
  articleName.textContent = obj.name;
  articleName.setAttribute("class", "article__name");

  let articleActor = document.createElement("p");
  articleActor.textContent = `Actor: ${obj.actor}`;
  articleActor.setAttribute("class", "article__actor");

  let articleGender = document.createElement("p");
  articleGender.textContent = `Gender: ${obj.gender}`;
  articleGender.setAttribute("class", "article__gender");

  let articleHouse = document.createElement("p");
  articleHouse.textContent = `House: ${obj.house}`;
  articleHouse.setAttribute("class", "article__house");

  let articleWand = document.createElement("p");
  articleWand.textContent = `Wand core: ${obj.wand.core}`;
  articleWand.setAttribute("class", "article__wand");

  let articleAlive = document.createElement("p");
  articleAlive.textContent = `Alive: ${obj.alive}`;
  articleAlive.setAttribute("class", "article__alive");

  article.append(articleImg, articleText);
  articleText.append(
    articleName,
    articleActor,
    articleGender,
    articleHouse,
    articleWand,
    articleAlive
  );
  cards.append(article);
}

// Отрисовывает все карточки
function showCards(arr) {
  arr.forEach(createCard);
}

// Точка входа
(function main() {
  showCards(data);
})();

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
