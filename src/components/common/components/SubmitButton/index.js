import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

import { _t } from '../../../../i18n';

const SubmitButton = ({ onPress, label, isSubmitting, disabled, style }) => (
  <TouchableOpacity disabled={disabled || isSubmitting} onPress={onPress} style={(disabled || isSubmitting) ? [styles.disabledButton, style || {}] : [styles.button, style || {}]}>
    {
    isSubmitting
      ? <ActivityIndicator color="white" />
      : <Text style={styles.buttonText}>{_t(label)}</Text>
  }
  </TouchableOpacity>
);

SubmitButton.defaultProps = {
  isSubmitting: false,
  disabled: false,
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SubmitButton;
