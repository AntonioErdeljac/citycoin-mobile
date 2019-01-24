import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

import { servicesIcons } from '../../../constants';

const ServiceIcon = ({ service, size, color }) => {
  const IconComponent = Icon[servicesIcons[service.type].type];

  return <IconComponent name={servicesIcons[service.type].icon} size={size} color={color} />;
};

ServiceIcon.defaultProps = {
  color: '#4E65F6',
  size: 28,
};

ServiceIcon.propTypes = {
  service: PropTypes.shape({}).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default ServiceIcon;
