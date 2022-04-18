import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function AppCopyright(props) {
  const { siteName, siteLink } = props;

  if (!siteName) return null;

  const year = new Date().getFullYear();
  const siteLinkExists = Boolean(siteLink);

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {siteLinkExists ? (
        <Link color="inherit" href={siteLink} target="_blank">
          {siteName}
        </Link>
      ) : (
        siteName
      )}{' '}
      {year}.
    </Typography>
  );
}

AppCopyright.propTypes = {
  siteName: PropTypes.string,
  siteLink: PropTypes.string,
};

AppCopyright.defaultProps = {
  siteName: undefined,
  siteLink: undefined,
};

export default AppCopyright;
