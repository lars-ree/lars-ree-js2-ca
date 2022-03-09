import { favouritesKey } from "../settings/storageKey.js";

export function getFav() {
  const favourites = localStorage.getItem(favouritesKey);

  if (!favourites) {
    return [];
  } else {
    return JSON.parse(favourites);
  }
}

export function savetoFavourites(favourites) {
  localStorage.setItem(favouritesKey, JSON.stringify(favourites));
}
