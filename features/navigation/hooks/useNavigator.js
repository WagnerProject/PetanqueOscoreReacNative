import { useMemo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function useNavigator(drawer) {
    const navigator = useMemo(
        () => (drawer ? createDrawerNavigator() : createNativeStackNavigator()),
        [drawer]
    );

    return { ...navigator };
}
