import axios from 'axios';

export function setAxiosAuthHeader(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
