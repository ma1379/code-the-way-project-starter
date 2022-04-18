import { Menu } from '@mui/icons-material';
import {
  AppBar as MaterialAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function AppBar(props) {
  const { onMenuClick, title } = props;

  return (
    <MaterialAppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          size="large"
          sx={{ mr: 1 }}
        >
          <Menu />
        </IconButton>
        {title && <Typography variant="h6">{title}</Typography>}
      </Toolbar>
    </MaterialAppBar>
  );
}

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
};

AppBar.defaultProps = {
  onMenuClick: undefined,
  title: '',
};
