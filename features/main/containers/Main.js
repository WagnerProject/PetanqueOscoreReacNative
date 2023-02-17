import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../navigation/components/Navigation';
import routes from '../constants/routes';

import { setAxiosAuthHeader } from '../../../services/helpers/axiosHelper';
import { getUser } from '../../../store/actions/auth';

function Main({ token, getUser }) {
    function handleInit() {
        setAxiosAuthHeader(token);
        getUser();
    }

    useEffect(handleInit, []);

    return <Navigation {...routes} drawer />;
}

const mapStateToProps = ({ auth: { token } }) => ({ token });

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
