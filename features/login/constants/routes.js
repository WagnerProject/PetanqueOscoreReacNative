import LoginForm from '../containers/LoginForm';
import SubscriptionForm from '../../subscription/components/SubscriptionForm';

export default {
    initialRouteName: 'connexion',
    routes: [
        {
            name: 'connexion',
            component: LoginForm,
            options: { headerShown: false, title: 'Connexion' },
        },
        {
            name: 'subscription',
            component: SubscriptionForm,
            options: { title: 'Inscription' },
        },
    ],
};
