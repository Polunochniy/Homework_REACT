

export const NAVIGATE = 'NAVIGATE'
export const RESET_NAVIGATION = 'RESET_NAVIGATION'

const defaultState = {
    nextScreen: '',
}


export default function navigationReducer(state = defaultState, action) {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                nextScreen: action.payload.screen
            }
        case RESET_NAVIGATION:
            return defaultState
        default:
            return state
    }
}
export const navigateAC = (screen) => ({
    type: NAVIGATE,
    payload: {
        screen,
    }
})


export const resetNavigationAC = () => ({
    type: RESET_NAVIGATION,
})
