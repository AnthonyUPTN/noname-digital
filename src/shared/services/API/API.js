import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://dummyjson.com/products/',
});

export const fetchAllProducts = async () => {
  const { data } = await instance.get('/', {
    params: {
      limit: '50',
    },
  });
  return data.products;
};
