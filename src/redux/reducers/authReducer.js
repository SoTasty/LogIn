import { LOGIN, PASSWORD } from "../../constants/constants"

const initialState = {
    login: '',
    password: ''
}

export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, login: actions.payload}
        
        case PASSWORD:
            return { ...state, password: actions.payload}
        default:
            return state
    }
}