import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { configureStore } from 'util/configure-store/configure-store';
import { render as ReactDOMRender } from 'react-dom';
import { Root } from './components/root/root';

const store = configureStore();

const render = (Component) =>
  ReactDOMRender(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app')
  );

render(Root);

if (module.hot) {
  module.hot.accept('./components/root/root', () => {
    // eslint-disable-next-line global-require
    render(require('./components/root/root').Root);
  });
}
