import { handleResponse, handleError } from "./apiUtils";

export function getProducts(page, pricrSort) {
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=${page}&size=10&pricrSort=${pricrSort}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
export function getfilters() {
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product/filters`;
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
export function getProductsbyname(name) {
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=0&size=10&name=${name}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getAllProducts() {
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product/getAllProducts`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getProductsbybrands(brands, name, price) {
  var baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=0&size=24`;

  if (name && brands)
    baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=0&size=24&name=${name}&brands=${brands}`;
  else if (name)
    baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=0&size=24&name=${name}`;
  else if (brands)
    baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product?page=0&size=24&brands=${brands}`;
  if (price) baseUrl = baseUrl + `&pricemin=${price[0]}&pricemax=${price[1]}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

function SCRAPPINGProductsAmazone() {
const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product/scrapping`;
return fetch(baseUrl, { method: "POST" })
  .then(handleResponse)
  .catch(handleError);
  
}



export function SCRAPPINGProductsZARA() {
  var baseUrl = `https://secure-ocean-54413.herokuapp.com/api/getUrl`;
  return fetch(baseUrl , { method: "POST" })
    .then(handleResponse)
    .catch(handleError);
  
}
export function SCRAPPINGProducts() {
  const baseUrl = "https://secure-ocean-54413.herokuapp.com/api/product/scrapping";
   return fetch(baseUrl, { method: "POST" })
     .then(handleResponse)
     .catch(handleError);
}
export function deleteProduct(courseId) {
  console.log("api");
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product/${courseId}`;
  return fetch(baseUrl , { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
export function deleteAllProduct() {
  const baseUrl = `https://secure-ocean-54413.herokuapp.com/api/product`;
  return fetch(baseUrl , { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}