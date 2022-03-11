import { baseUrl } from "./settings/api.js";
import { renderData } from "./ui/renderData.js";
import { searchData } from "./ui/searchData.js";
import { displayMessage } from "./components/displayMessage.js";
import messages from "./ui/messages.js";

const dataFromApi = baseUrl + "articles";
(async function () {
  try {
    const response = await fetch(dataFromApi);
    const json = await response.json();
    console.log(json);

    renderData(json);
    searchData(json);
  } catch (error) {
    displayMessage("error", messages.serverError, "ul");
  }
})();
