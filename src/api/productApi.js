import { handleResponse, handleError } from "./apiUtils";

export function getProducts(page,pricrSort) {
  const baseUrl = `http://localhost:3100/api/product?page=${page}&size=24&pricrSort=${pricrSort}`;
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
export function getfilters() {
  const baseUrl = `http://localhost:3100/api/product/filters`;
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
export function getProductsbyname(name) {
  const baseUrl = `http://localhost:3100/api/product?page=0&size=24&name=${name}`;
   
  


  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getProductsbybrands(brands, name) {
 var baseUrl = `http://localhost:3100/api/product?page=0&size=24`;
  console.log("n"+name +"   b"+brands );
  if (name && brands)
    
     baseUrl = `http://localhost:3100/api/product?page=0&size=24&name=${name}&brands=${brands}`;
  else if (name)
      baseUrl = `http://localhost:3100/api/product?page=0&size=24&name=${name}`;
  else if (brands)  baseUrl = `http://localhost:3100/api/product?page=0&size=24&brands=${brands}`;

  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
