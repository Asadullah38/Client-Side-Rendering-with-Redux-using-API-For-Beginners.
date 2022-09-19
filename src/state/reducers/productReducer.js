const initialState = { products: [] };
 
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "setProducts":
      return { ...state, products: payload };
    default:
      return state;
  }
};
export default productReducer;
