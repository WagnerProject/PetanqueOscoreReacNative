import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './store';
import Theme from './features/theme/components/Theme';
import AppFeature from './features/app/containers/App';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Theme>
                    <AppFeature />
                </Theme>
            </SafeAreaProvider>
        </Provider>
    );
}
