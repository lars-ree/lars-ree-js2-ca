import { renderArticles } from "./renderProperties.js";

export function searchArticle(result) {
  const search = document.querySelector(".search");
  const articleContainer = document.querySelector("ul");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProp = result.filter(function (card) {
      if (card.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (card.author.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (card.summary.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderArticles(filteredProp);
  };
}
