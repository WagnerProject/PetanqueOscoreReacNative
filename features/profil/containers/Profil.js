import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from '@rneui/base';

const styles = {
    container: { flex: 1, padding: 10 },
};

function Profil({ user }) {
    return (
        <View style={styles.container}>
            <Text>{user.username}</Text>
        </View>
    );
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Profil);
