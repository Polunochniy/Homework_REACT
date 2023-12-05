export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const UPDATE_PRODUCT_CLICK_COUNT = 'UPDATE_PRODUCT_CLICK_COUNT';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const SEND_ORDER = 'SEND_ORDER';


const defaultState = {  
  items: [],
  productClickCounts: {},
};

export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const { product } = action.payload;
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
        productClickCounts: {
          ...state.productClickCounts,
          [product._id]: (state.productClickCounts[product._id] || 0) + 1,
        },
      };

    case REMOVE_PRODUCT_FROM_CART:
      const itemIdToRemove = action.payload.itemId;
      const updatedItems = state.items.filter(item => item._id !== itemIdToRemove);
      const updatedProductClickCounts = { ...state.productClickCounts };
      delete updatedProductClickCounts[itemIdToRemove];
      return {
        ...state,
        items: updatedItems,
        productClickCounts: updatedProductClickCounts,
      };

    case UPDATE_PRODUCT_CLICK_COUNT:
      const { productId, clickCount } = action.payload;
      return {
        ...state,
        productClickCounts: {
          ...state.productClickCounts,
          [productId]: clickCount,
        },
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload.itemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        ),
      };

    default:
      return state;
  }
};

export const addProductToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  });
};

export const updateProductClickCount = (productId, clickCount) => ({
  type: UPDATE_PRODUCT_CLICK_COUNT,
  payload: {
    productId,
    clickCount,
  },
});

export const removeProductFromCart = (itemId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    itemId,
  },
});

export const increaseQuantity = (itemId) => ({
  type: INCREASE_QUANTITY,
  payload: {
    itemId,
  },
});

export const decreaseQuantity = (itemId) => ({
  type: DECREASE_QUANTITY,
  payload: {
    itemId,
  },
});

export const sendOrder = (items) => ({
  type: SEND_ORDER,
  payload: {
    items
  },
});