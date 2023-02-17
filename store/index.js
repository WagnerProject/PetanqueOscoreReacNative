import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise-middleware';

import authReducer from './reducers/auth';

export default configureStore({
    reducer: { auth: authReducer },
    middleware: [promise],
});
