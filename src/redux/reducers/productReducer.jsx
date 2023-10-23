// {
//     productName: '',
//     productQuantity: ''
// }

const defaultState = {
    products: []
}


export default function productReducer(state = defaultState, action) {
    switch (action.type) {
       case 'ADD_NEW_PRODUCT': 
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state
    }
}

// ACTION CREATORS (FUNC)
export const addNewProductAC = (value) => ({
    type: 'ADD_NEW_PRODUCT',
    payload: {
        ...value
    }
})
