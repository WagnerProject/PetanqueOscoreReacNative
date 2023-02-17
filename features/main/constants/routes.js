import Home from '../../home/components/Home';
import Profil from '../../profil/containers/Profil';

export default {
    initialRouteName: 'home',
    routes: [
        {
            name: 'home',
            component: Home,
            options: { title: 'Accueil' },
        },
        {
            name: 'profil',
            component: Profil,
            options: { title: 'Profil' },
        },
    ],
};
