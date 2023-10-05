import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }

  return [];
}

const initialState = {
  products: getItems(),
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, deleteProduct } = sliceState.actions;
export default reducer;
