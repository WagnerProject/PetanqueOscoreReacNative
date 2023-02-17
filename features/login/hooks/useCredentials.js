import { useState } from 'react';

export default function useCredentials() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    function setUsername(username) {
        setCredentials((credentials) => ({ ...credentials, username }));
    }

    function setPassword(password) {
        setCredentials((credentials) => ({ ...credentials, password }));
    }

    return { ...credentials, setUsername, setPassword };
}
