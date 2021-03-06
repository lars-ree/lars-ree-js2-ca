import { displayMessage } from "../components/displayMessage.js";
import { getFavourite, savetoFavourites } from "../utils/localStorage.js";
import messages from "./messages.js";

export function renderData(render, isFavourite = false) {
  const favourites = getFavourite();

  if (isFavourite) {
    render = favourites;
  }

  if (render.length === 0) {
    return displayMessage(
      "warning",
      isFavourite ? messages.emptyFavourite : messages.noResult,
      "ul"
    );
  }

  const articleContainer = document.querySelector("ul");

  articleContainer.innerHTML = "";

  render.forEach(function (article) {
    const articleInFavourite = favourites.find(function (item) {
      return item.id == article.id;
    });

    const heartClass = articleInFavourite ? "fas" : "far";

    articleContainer.innerHTML += `
        <div class="card">
        <li class="card-title">Title: ${article.title}</li>
        <li class="card-author">Author: ${article.author}</li>
        <li class="card-summary">Summary: ${article.summary}</li>
        <i class="${heartClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-summary="${article.summary}" data-author="${article.author}"></i>
        </div>`;
  });

  const favoButton = document.querySelectorAll(".card i");

  favoButton.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    console.log(event);
    event.target.classList.toggle("fas");
    event.target.classList.toggle("far");

    const { id, title, summary, author } = this.dataset;

    const favourite = getFavourite();

    const articlesIsInFav = favourite.find(function (item) {
      return item.id === id;
    });

    if (!articlesIsInFav) {
      const addArticle = {
        id: id,
        title: title,
        summary: summary,
        author: author,
      };
      favourite.push(addArticle);
      savetoFavourites(favourite);
    } else {
      const newFavList = favourite.filter((fav) => fav.id !== id);
      savetoFavourites(newFavList);
    }
    if (isFavourite) {
      renderData(null, true);
    }
  }
}
