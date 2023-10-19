export const SET_USER_TOKEN = 'SET_USER_TOKEN';

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

// ACTION CREATORS (FUNC)
export const setUserTokenAC = (token) => ({
    type: SET_USER_TOKEN,
    payload: {
        token
    }
})
