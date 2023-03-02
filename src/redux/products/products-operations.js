import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllProducts } from 'shared/services/API/API';

export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllProducts();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
