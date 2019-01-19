import PropTypes from 'prop-types';
import React from 'react';
import { Item, Input as NativeInput } from 'native-base';

import styles from './styles';

import Icon from '../Icon';

const Input = ({ touched, errors, setFieldValue, name, placeholder, values, secureTextEntry, disabled, showValidation, hasFailedToSubmit }) => {
  const rightIcon = ((touched[name] && showValidation) || hasFailedToSubmit)
    ? <Icon.FontAwesome name={(errors[name] || hasFailedToSubmit) ? 'warning' : 'check-circle'} color={(errors[name] || hasFailedToSubmit) ? '#e74c3c' : '#1fcf7c'} style={{ marginRight: 16 }} size={18} />
    : null;

  return (
    <Item style={disabled ? styles.innerContainerDisabled : styles.innerContainer}>
      <NativeInput
        disabled={disabled}
        placeholder={placeholder}
        placeholderTextColor="rgba(0,0,0,.6)"
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        style={styles.input}
        name={name}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      {rightIcon}
    </Item>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
  disabled: false,
  showValidation: true,
};

Input.propTypes = {
  hasFailedToSubmit: PropTypes.bool.isRequired,
  showValidation: PropTypes.bool,
  disabled: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  touched: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Input;
