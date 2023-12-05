export const GET_TOKEN_ACTION = 'GET_TOKEN_ACTION';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const GET_NEW_USER_ACTION = 'GET_NEW_USER_ACTION';

const defaultState = {
    token: '',
    login: '',
    email: '',
    password: '',
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_TOKEN_ACTION:
            return {
                ...state,
                login: action.payload.login,
                email: action.payload.email,
                password: action.payload.password,
            };

        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            };

        case GET_NEW_USER_ACTION:
            return {
                ...state,
                login: action.payload.user.login,
                email: action.payload.user.email,
                password: action.payload.user.password,
            };
            
        default:
            return state
    }
};

export const getTokenAC = ({ login, password, email }) => ({
    type: GET_TOKEN_ACTION,
    payload: {
        login,
        password,
        email
    }
});

export const setUserTokenAC = (token) => ({
    type: SET_USER_TOKEN,
    payload: {
        token
    }
});

export const createNewUserAC = (user) => ({
    type: GET_NEW_USER_ACTION,
    payload: {
        user
    }
});

