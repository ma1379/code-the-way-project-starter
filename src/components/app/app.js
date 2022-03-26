import 'normalize.css/normalize.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';

const theme = createTheme();

export function App(props) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

App.defaultProps = {
  children: null,
};
