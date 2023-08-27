// reducers.js
import { FETCH_PRODUCTS   } from '../actions/fetchData';
import { ADD_TO_CART, REMOVE_FROM_CART ,INCREMENT_QUANTITY,
  DECREMENT_QUANTITY, CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
      } from '../actions/action';
const initialState = {
  products: [],
  cart: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case ADD_TO_CART:
        const newProduct = action.payload;
        const existingProductIndex = state.cart.findIndex(item => item.id === newProduct.id);
        if (existingProductIndex !== -1) {
          const updatedCart = state.cart.map((item, index) => {
            if (index === existingProductIndex) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...newProduct, quantity: 1 }],
          };
        };
      case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
      case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };
      case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
      
    default:
      return state;
  }
};

export default productReducer;
