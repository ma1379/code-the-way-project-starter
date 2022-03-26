import 'normalize.css/normalize.css';
import 'styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';

export function App(props) {
  const { children } = props;
  return <div>{children}</div>;
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
