import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconCV,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    case 'CV':
      return <IconCV />;
    default:
      return <IconGitHub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
