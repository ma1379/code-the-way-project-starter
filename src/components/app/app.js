import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router';
import AppNavigation from './app-navigation/app-navigation';
import AppCopyright from './app-copyright/app-copyright';
import AppBar from './app-bar/app-bar';

const theme = createTheme();

function App() {
  const [navigationActive, setNavigationActive] = useState(false);

  const closeNavigation = () => setNavigationActive(false);
  const openNavigation = () => setNavigationActive(true);

  const siteName = 'Code The Way Demo Form';

  return (
    <ThemeProvider theme={theme}>
      <AppBar title={siteName} onMenuClick={openNavigation} />
      <AppNavigation active={navigationActive} onCloseClick={closeNavigation} />
      <CssBaseline />
      <Outlet />
      <AppCopyright
        siteName={siteName}
        siteLink="https://www.codetheway.org/"
      />
    </ThemeProvider>
  );
}

export default App;
