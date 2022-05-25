import React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { configureStore } from './util/configure-store/configure-store';
import { Root } from './components/root/root';

const store = configureStore();

const render = (Component) =>
  ReactDOMRender(<Component store={store} />, document.getElementById('app'));

render(Root);
