export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCTS_ARRAY = 'UPDATE_PRODUCTS_ARRAY';
// ADD TO CART
export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product,
});
// REMOVE FROM CART
export const removeFromCart = productId => {
  return { type: REMOVE_FROM_CART, payload: productId };
};

export const incrementQuantity = productId => {
  return { type: INCREMENT_QUANTITY, payload: productId };
};
export const decrementQuantity = productId => {
  return { type: DECREMENT_QUANTITY, payload: productId };
};
// SHOW PRODUCT
export const selectProductById = (state, id) => {
  return state.products.find(product => product.id === id);
};
// CREATE PRODUCT
export const createProduct = productData => ({
  type: CREATE_PRODUCT,
  payload: productData,
});

// UPDATE PRODUCT
export const updateProduct = (productId, productData) => ({
  type: UPDATE_PRODUCT,
  payload: { id: productId, ...productData },
});

// DELETE PRODUCT
export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  payload: productId,
});


// UPDATE ARRAY
export const updateProductsArray = (products) => ({
  type: UPDATE_PRODUCTS_ARRAY,
  payload: products,
});

