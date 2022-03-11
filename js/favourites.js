import { renderData } from "./ui/renderData.js";
import { displayMessage } from "./components/displayMessage.js";
import message from "./ui/messages.js";

renderData(null, true);

const clearButton = document.querySelector("button");

clearButton.addEventListener("click", clearStorage);

function clearStorage() {
  const articleContainer = document.querySelector("ul");

  localStorage.clear();
  displayMessage("warning", message.emptyFavourite, "ul");
}
