import axios from 'axios';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    
    const data = response.data;
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
