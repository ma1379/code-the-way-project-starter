import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ROUTES } from '../../constants/routes';
import DemoForm from '../demo-form/demo-form';
import App from '../app/app';
import packageJson from '../../../package.json';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'code-the-way-project-starter' so we
// use is as the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

const theme = createTheme();

export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={ROUTES.DEMO_FORM} element={<DemoForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
