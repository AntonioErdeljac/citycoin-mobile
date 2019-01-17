import PropTypes from 'prop-types';
import React from 'react';
import { Input as NativeInput, Item, Label } from 'native-base';

import styles from './styles';

import { _t } from '../../../../i18n';

const Input = ({ autoFocus, onChange, name, errors, values }) => (
  <Item error={!!errors[name]} floatingLabel style={styles.item}>
    <Label style={styles.label}>{_t(`labels[${name}]`)}</Label>
    <NativeInput autoCorrect={false} onChangeText={text => onChange(name, text)} value={values[name]} autoFocus={autoFocus} style={styles.input} />
  </Item>
);

Input.defaultProps = {
  autoFocus: false,
};

Input.propTypes = {
  autoFocus: PropTypes.bool,
  errors: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired,
};

export default Input;
