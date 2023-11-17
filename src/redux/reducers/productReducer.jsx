export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

const defaultState = {
    data: [],
    categories: [],
    selectedCategory: null,
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory,
            };
        default:
            return state
    }
}

export const getProductsAC = (limit = 100, skip = 0, selectedCategory = null) => {
    return {
      type: GET_PRODUCTS,
      payload: {
        skip,
        limit,
        selectedCategory,
      },
    };
};

export const setProductsAC = ({ data }) => ({
    type: SET_PRODUCTS,
    payload: {
        data
    }
})

export const getCategoriesAC = (limit = 20, skip = 0) => ({
    type: GET_CATEGORIES,
    payload: {
        skip,
        limit
    }
})

export const setCategoriesAC = ({ data, limit, skip }) => ({
    type: SET_CATEGORIES,
    payload: {
        categories: data,
        limit,
        skip,
    }
})

export const setSelectedCategoryAC = (selectedCategory) => ({
    type: SET_SELECTED_CATEGORY,
    payload: {
        selectedCategory
    },
})

