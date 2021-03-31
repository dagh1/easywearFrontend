import * as productApi from '../../api/productApi'

 const loadProductSuccess = (products)=> {
  return { type: "LOAD_PRODUCTS_SUCCESS", products };
}

export const loadProducts=()=> {
    
  return function(dispatch) {
    return productApi
        .getProducts()
        .then(products => {
        dispatch(loadProductSuccess(products));
      })
      .catch(error => {
        throw error;
      });
  };
}