/*::::::::::::::::::::: 
:::  Initial data   :::
:::::::::::::::::::::::*/

//  Handle focus login inputs
const initialFocus = {
    username: false,
    password: false
}
//  Handle password
const initShowPassword = false;

/*::::::::::::::::::::: 
:::      Types      :::
:::::::::::::::::::::::*/

const types = {
    //  Styles focus
    USERNAME_FOCUS: 'USERNAME_FOCUS',
    PASSWORD_FOCUS: 'PASSWORD_FOCUS',
    INPUT_BLUR: 'INPUT_BLUR',
    //  Show password
    SHOW_PASSWORD: 'SHOW_PASSWORD',
    HIDE_PASSWORD: 'HIDE_PASSWORD'
}


/*::::::::::::::::::::: 
:::     Reducers    :::
:::::::::::::::::::::::*/

export function stylesReducer(state = initialFocus, action) {
    switch (action.type) {
        case types.USERNAME_FOCUS:
            return {
                ...state,
                username: true
            }
        case types.PASSWORD_FOCUS:
            return {
                ...state,
                password: true
            }
        case types.INPUT_BLUR:
            return {
                username: false,
                password: false
            }
        default:
            return state;
    }
}

export function handlePasswordReducer(state = initShowPassword, action) {
    switch (action.type) {
        case types.SHOW_PASSWORD:
            return true;
        case types.HIDE_PASSWORD:
            return false;
        default:
            return state;
    }
}

/*::::::::::::::::::::: 
:::     Actions     :::
:::::::::::::::::::::::*/

//  Styles focus input
export const username_focus_action = () => async (dispatch) => {
    dispatch({
        type: types.USERNAME_FOCUS
    })
}
export const password_focus_action = () => async (dispatch) => {
    dispatch({
        type: types.PASSWORD_FOCUS
    })
}
export const input_blur_action = () => async (dispatch) => {
    dispatch({
        type: types.INPUT_BLUR
    })
}

//  Handle show password
export const show_password_action = () => async (dispatch) => {
    dispatch({
        type: types.SHOW_PASSWORD
    })
}
export const hide_password_action = () => async (dispatch) => {
    dispatch({
        type: types.HIDE_PASSWORD
    })
}