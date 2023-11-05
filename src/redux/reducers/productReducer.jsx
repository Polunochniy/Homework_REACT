export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_CATEGORIES = 'SET_CATEGORIES'

const defaultState = {
    data: [],
    categories: []
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
        default:
            return state
    }
}

export const getProductsAC = (limit = 20, skip = 0) => ({
    type: GET_PRODUCTS,
    payload: {
        skip,
        limit
    }
})

export const setProductsAC = ({ data }) => ({
    type: SET_PRODUCTS,
    payload: {
        data
    }
})

export const getCategoriesAC = (limit = 30, skip = 0) => ({
    type: GET_CATEGORIES,
    payload: {
        skip,
        limit
    }
})

export const setCategoriesAC = ({ data }) => ({
    type: SET_CATEGORIES,
    payload: {
        categories: data
    }
})



