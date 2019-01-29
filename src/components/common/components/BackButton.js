import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from './Icon';

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon.MaterialCommunityIcons name="arrow-left" size={25} color="black" />
  </TouchableOpacity>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
