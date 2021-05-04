export default function productsReducer(state = [], action) {
    switch (action.type) {
      case "LOAD_PRODUCTS_SUCCESS":
        return action.products;
      case "SCRAPING_PRODUCTS_SUCCESS":
        return action.products;
      case "DELETE_products_OPTIMISTIC":
        return state.filter(
          (products) => products.products.id !== action.course.id
        );
      default:
        return state;
    }
}