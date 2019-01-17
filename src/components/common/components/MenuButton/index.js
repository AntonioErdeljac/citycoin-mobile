import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

import Icon from '../Icon';

const MenuButton = ({ onPress, right, name }) => (
  <TouchableOpacity onPress={() => onPress()} style={right ? styles.right : styles.left}>
    {
      right
        ? <Icon.EvilIcons name={name} size={25} />
        : <Icon.Ionicons name={name} size={25} />
    }
  </TouchableOpacity>
);

MenuButton.defaultProps = {
  right: false,
};

MenuButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  right: PropTypes.bool,
};

export default MenuButton;
