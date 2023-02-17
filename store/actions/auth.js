import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { base_url } from '../../config/parameters';
import { AUTH_TOKEN, AUTH_USER, AUTH_LOGIN } from '../constants/auth';

export function getToken() {
    return { type: AUTH_TOKEN, payload: AsyncStorage.getItem('token') };
}

export function getUser() {
    return {
        type: AUTH_USER,
        payload: axios.get(`https://bastienforestier.fr/paul/actions/connectUser.php`),
    };
}

export function login(username, userPassword) {
    return {
        type: AUTH_LOGIN,
        payload: axios.post(`https://bastienforestier.fr/paul/actions/connectUser.php`, {
            username: username,
            password: userPassword,
        }),
    };
}
