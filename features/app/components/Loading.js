import React from 'react';
import { View, Text } from 'react-native';
import { LinearProgress } from '@rneui/themed';

const styles = {
    container: { flex: 1, justifyContent: 'center', padding: 10 },
};

export default () => (
    <View style={styles.container}>
        <Text>Loading...</Text>
        <LinearProgress style={{ marginVertical: 10 }} />
    </View>
);
