import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3100/api/product?page=1&size=10";

export function getProducts () {

  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
