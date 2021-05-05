export default function productsReducer(state = [], action) {
    switch (action.type) {
      case "LOAD_PRODUCTS_SUCCESS":
        return action.products;
      case "SCRAPING_PRODUCTS_SUCCESS":
        return action.products;
      case "DELETE_products_OPTIMISTIC":
        return state?.products.filter(
          (products) => products.id !== action.product.id
        );
      default:
        return state;
    }
}