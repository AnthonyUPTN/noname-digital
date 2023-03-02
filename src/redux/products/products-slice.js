import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from 'redux/products/products-operations';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavorite(store, { payload }) {
      // eslint-disable-next-line
      store.data.find(el => {
        if (el.id === payload) {
          el.favorite = !el.favorite;
        }
      });
    },
  },
  extraReducers: {
    [getProducts.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [getProducts.fulfilled]: (store, { payload }) => ({
      ...store,
      data: payload,
      loading: false,
    }),

    [getProducts.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export const { addFavorite } = productsSlice.actions;

export default productsSlice.reducer;
