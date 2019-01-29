import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from './Icon';

const BackButton = ({ onPress, iconColor }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon.MaterialCommunityIcons name="arrow-left" size={25} color={iconColor} />
  </TouchableOpacity>
);

BackButton.defaultProps = {
  iconColor: 'black',
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
};

export default BackButton;
