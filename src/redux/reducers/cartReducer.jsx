export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

const defaultState = {
  items: [],
};

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload.product],
        };

      case 'REMOVE_PRODUCT_FROM_CART':
        const itemIdToRemove = action.payload.itemId;
        return {
          ...state,
          items: state.items.filter(item => item._id !== itemIdToRemove),
        };
      default:
        return state;
    }
};

export default cartReducer

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
});