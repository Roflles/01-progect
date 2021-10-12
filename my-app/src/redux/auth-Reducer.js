import {authAPI} from "../Api/Api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_SUCCESS = 'auth/SET_LOGIN_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginSuccess: true,
    error: ""
};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: action.loginSuccess,
                error: action.error
            }


        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});
export const setLoginSuccess = (loginSuccess, error) => ({
    type: SET_LOGIN_SUCCESS, loginSuccess, error
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getAuthMe();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(setLoginSuccess(true))
        dispatch(getAuthUserData())
    } else {
        dispatch(setLoginSuccess(false, data.data.messages[0]))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;