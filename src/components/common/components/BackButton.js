import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from './Icon';

const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
    <Icon.MaterialCommunityIcons name="arrow-left" size={25} color="black" />
  </TouchableOpacity>
);

BackButton.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default BackButton;
