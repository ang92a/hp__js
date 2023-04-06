import { data } from "../data/hp.js";
export let cards = document.querySelector(".cards"); // место отрисовки карточки

// ОТТРИСОВЫВАЕТ ОДНУ КАРТОЧКУ
export function createCard(obj) {
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
export function showCards(arr) {
  arr.forEach((elem) => {
    cards.append(createCard(elem));
  });
}

// Функция отрисовывает все карточки
showCards(data);
