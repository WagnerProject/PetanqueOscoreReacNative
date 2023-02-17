import { useEffect } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getToken } from '../../../store/actions/auth';
import Loading from '../components/Loading';
import Main from '../../main/containers/Main';
import Login from '../../login/components/Login';

function App({ initialized, logged, token, getToken }) {
    function handleInit() {
        getToken();
    }

    function handleToken() {
        initialized && token
            ? AsyncStorage.setItem('token', token)
            : AsyncStorage.removeItem('token');
    }

    useEffect(handleInit, []);
    useEffect(handleToken, [token]);

    return initialized ? logged ? <Main /> : <Login /> : <Loading />;
}

const mapStateToProps = ({ auth }) => ({
    initialized: auth.initialized,
    logged: auth.isLogged(),
    token: auth.token,
});

const mapDispatchToProps = (dispatch) => ({
    getToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
