import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DemoForm } from 'components/demo-form/demo-form';
import App from 'components/app/app';
import packageJson from '../../../package.json';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'code-the-way-project-starter' so we
// use is as the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

export default function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={ROUTES.DEMO_FORM} element={<DemoForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
