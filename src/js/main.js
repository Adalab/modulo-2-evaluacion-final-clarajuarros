'use strict';

const searchingGap = document.querySelector(".js-search");
const button = document.querySelector(".js-btn");
const resultsList = document.querySelector(".js-results-list");
const favouriteList = document.querySelector(".js-favourite-list");

let dataList = [];
let favouritesDataList = [];
//escuchar todos los elementos de la lista
const listenListResults = () => {
    const listResults = document.querySelectorAll(".js-list");
};

button.addEventListener("click", triggerSearch);

// hacer que la entrada funcione al dar enter
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      triggerSearch();
    }
}); 
recoverFavourites();
listenEachDelButton();
