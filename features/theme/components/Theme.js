import { ThemeProvider, createTheme } from '@rneui/themed';

import theme from '../constants/theme';

const appTheme = createTheme(theme);

export default ({ children }) => (
    <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
);
