import { NavigationContainer } from '@react-navigation/native';

import useNavigator from '../hooks/useNavigator';
import defaultOptions from '../constants/options';

export default function Navigation({
    initialRouteName,
    routes,
    drawer = false,
}) {
    const { Navigator, Screen } = useNavigator(drawer);

    return (
        <NavigationContainer>
            <Navigator initialRouteName={initialRouteName}>
                {routes.map(({ options, ...props }) => (
                    <Screen
                        key={props.name}
                        options={{ ...defaultOptions, ...options }}
                        {...props}
                    />
                ))}
            </Navigator>
        </NavigationContainer>
    );
}
