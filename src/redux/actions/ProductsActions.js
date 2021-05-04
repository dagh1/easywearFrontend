import * as productApi from "../../api/productApi";

const loadProductSuccess = (products) => {
  return { type: "LOAD_PRODUCTS_SUCCESS", products };
};

const SCRAPPINGProductSuccess = (products) => {
  return { type: "SCRAPING_PRODUCTS_SUCCESS", products };
};

export function deleteproductsOPTIMISTIC(products) {
  return { type: "DELETE_products_OPTIMISTIC", products };
}
export function deleteproducts(products) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteproductsOPTIMISTIC(products));
    return productApi.deleteProduct(products.id);
  };
}


export const SCRAPPINGProducts = () => {
  return function (dispatch) {
    return productApi
      .SCRAPPINGProducts()
      .then((products) => {
        dispatch(SCRAPPINGProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};



export const loadProducts = (page) => {
  return function (dispatch) {
    return productApi
      .getProducts(page)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loadAllProducts = () => {
  return function (dispatch) {
    return productApi
      .getAllProducts()
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loadProductsbyName = (name) => {
  return function (dispatch) {
    return productApi
      .getProductsbyname(name)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const loadProductsbybrands = (brands, name) => {
  return function (dispatch) {
    return productApi
      .getProductsbybrands(brands, name)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};
