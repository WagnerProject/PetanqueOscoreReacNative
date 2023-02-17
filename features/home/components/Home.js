import { View } from 'react-native';
import { Text } from '@rneui/base';

const styles = {
    container: { flex: 1, padding: 10 },
};

export default () => (
    <View style={styles.container}>
        <Text>Bienvenue sur l'application PetanqueOscore ! </Text>
    </View>
);
