import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity } from 'react-native';

import schema from './schema';

import styles from '../../styles';

import { SubmitButton, Input } from '../../../common/components';

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
          placeholder="Email"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          name="password"
          disabled={isSubmitting}
          placeholder="Password"
          secureTextEntry
          hasFailedToSubmit={hasFailedToSubmit}
        />

        <View style={[styles.buttonsContent, styles.buttonMargin]}>
          <View style={[styles.buttonContainer]}>
            <SubmitButton
              onPress={formProps.handleSubmit}
              isSubmitting={isSubmitting}
              label="Sign in"
            />
          </View>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.subtitle}>Need an account?</Text>
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
