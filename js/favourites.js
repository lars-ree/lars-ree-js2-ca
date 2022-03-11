import { renderArticles } from "./ui/renderProperties.js";
import { displayMessage } from "./components/displayMessage.js";
import message from "./ui/messages.js";

renderArticles(null, true);

const clearBtn = document.querySelector("button");

clearBtn.addEventListener("click", clearStorage);

function clearStorage() {
  const articleContainer = document.querySelector("ul");

  localStorage.clear();
  displayMessage("warning", message.emptyFavourite, "ul");
}
