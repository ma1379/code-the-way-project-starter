import { App } from 'components/app/app';
import { Outlet } from 'react-router-dom';
import React from 'react';

export function Main() {
  return (
    <App>
      <Outlet />
    </App>
  );
}
