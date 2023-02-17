import {
    AUTH_TOKEN_FULFILLED,
    AUTH_USER_PENDING,
    AUTH_USER_REJECTED,
    AUTH_USER_FULFILLED,
    AUTH_LOGIN_PENDING,
    AUTH_LOGIN_REJECTED,
    AUTH_LOGIN_FULFILLED,
} from '../constants/auth';

const initialState = {
    initialized: false,
    fetching: false,
    token: '',
    error: '',
    user: { username: '', roles: [] },
    isLogged: function () {
        return Boolean(this.token);
    },
};

export default function authReducers(state = initialState, { type, payload }) {
    switch (type) {
        case AUTH_TOKEN_FULFILLED:
            return { ...state, initialized: true, token: payload ?? '' };
        case AUTH_USER_PENDING:
            return { ...state, fetching: true };
        case AUTH_USER_REJECTED:
            return { ...state, fetching: false };
        case AUTH_USER_FULFILLED:
            return { ...state, fetching: false, user: payload.data };
        case AUTH_LOGIN_PENDING:
            return { ...state, fetching: true };
        case AUTH_LOGIN_REJECTED:
            return {
                ...state,
                fetching: false,
                error: 'Identifiant ou mot de passe incorrect',
            };
        case AUTH_LOGIN_FULFILLED:
            return {
                ...state,
                logged: true,
                fetching: false,
                token: payload.data.token,
                error: '',
            };
        default:
            return state;
    }
}
