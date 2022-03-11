import { baseUrl } from "./settings/api.js";
import { renderArticles } from "./ui/renderProperties.js";
import { searchArticle } from "./ui/searchProperties.js";
import { displayMessage } from "./components/displayMessage.js";
import messages from "./ui/messages.js";

const dataFromApi = baseUrl + "articles";
(async function () {
  try {
    const response = await fetch(dataFromApi);
    const json = await response.json();
    console.log(json);

    renderArticles(json);
    searchArticle(json);
  } catch (error) {
    displayMessage("error", messages.serverError, "ul");
  }
})();
