import { handleResponse, handleError } from "./apiUtils";

export function getProducts(page, pricrSort) {
  const baseUrl = `http://localhost:3100/api/product?page=${page}&size=30&pricrSort=${pricrSort}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
export function getProductsbyname(name) {
  const baseUrl = `http://localhost:3100/api/product?page=0&size=30&name=${name}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
