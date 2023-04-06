import { data } from "../data/hp.js";

export let selectList = document.querySelector("#select"); // select поиск

//1. Отрисовываем массив с уникальными значениями HOUSE
const getSelect = (array) => {
  const house = [];
  array.forEach(function (obj) {
    if (obj.house !== "") return house.push(obj.house);
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

// 3.Формируем форму со списком школ

 uniqHouse.forEach((elem) => {
  selectList.append(creteSelect(elem));
});
