/*::::::::::::::::::::: 
:::  Initial data   :::
:::::::::::::::::::::::*/

//  Handle focus login inputs
const initialFocus = {
    username: false,
    password: false
}


/*::::::::::::::::::::: 
:::      Types      :::
:::::::::::::::::::::::*/

const types = {
    USERNAME_FOCUS: 'USERNAME_FOCUS',
    PASSWORD_FOCUS: 'PASSWORD_FOCUS',
    INPUT_BLUR: 'INPUT_BLUR',
}


/*::::::::::::::::::::: 
:::     Reducers    :::
:::::::::::::::::::::::*/

export default function stylesReducer(state = initialFocus, action) {
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

/*::::::::::::::::::::: 
:::     Actions     :::
:::::::::::::::::::::::*/

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