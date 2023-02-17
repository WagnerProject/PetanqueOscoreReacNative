import { useState } from 'react';

export default function useFormData() {
    const [form, setForm] = useState({
        mail: '',
        login: '',
        password: '',
        verifPassword: '',
    });

    function setMail(mail) {
        setForm((form) => ({ ...form, mail }));
    }

    function setLogin(login) {
        setForm((form) => ({ ...form, login }));
    }

    function setPassword(password) {
        setForm((form) => ({ ...form, password }));
    }

    function setVerifPassword(verifPassword) {
        setForm((form) => ({ ...form, verifPassword }));
    }

    return { ...form, setMail, setLogin, setPassword, setVerifPassword };
}
