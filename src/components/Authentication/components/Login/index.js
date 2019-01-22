import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity } from 'react-native';

import schema from './schema';

import styles from '../../styles';

import { SubmitButton, Input } from '../../../common/components';

import { _t } from '../../../../i18n';

const Login = ({ handleOnSubmit, isSubmitting, hasFailedToSubmit, toggleForm }) => (
  <Formik
    initialValues={schema.initialValues}
    validationSchema={schema.validations}
    onSubmit={handleOnSubmit}
    render={formProps => (
      <React.Fragment>
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="email"
          placeholder="labels.email"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          name="password"
          disabled={isSubmitting}
          placeholder="labels.password"
          secureTextEntry
          hasFailedToSubmit={hasFailedToSubmit}
        />

        <View style={[styles.buttonsContent, styles.buttonMargin]}>
          <View style={[styles.buttonContainer]}>
            <SubmitButton
              onPress={formProps.handleSubmit}
              isSubmitting={isSubmitting}
              label="labels.signIn"
            />
          </View>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.subtitle}>{_t('labels.newAccount')}</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )}
  />
);

Login.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  hasFailedToSubmit: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Login;
