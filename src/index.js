import React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Root } from './components/root/root';

const render = (Component) =>
  ReactDOMRender(<Component />, document.getElementById('app'));

render(Root);
