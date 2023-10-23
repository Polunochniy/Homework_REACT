export const GET_TOKEN_ACTION = 'GET_TOKEN_ACTION'
export const SET_USER_TOKEN = 'SET_USER_TOKEN'

const defaultState = {
    token: '',
}


export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state
    }
}
export const getTokenAC = ({ login, password }) => ({
    type: GET_TOKEN_ACTION,
    payload: {
        login,
        password
    }
})


export const setUserTokenAC = (token) => ({
    type: SET_USER_TOKEN,
    payload: {
        token
    }
})
