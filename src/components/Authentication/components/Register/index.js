import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity } from 'react-native';

import schema from './schema';

import styles from '../../styles';

import { SubmitButton, Input } from '../../../common/components';

const Register = ({ handleOnSubmit, isSubmitting, hasFailedToSubmit, toggleForm }) => (
  <Formik
    initialValues={schema.initialValues}
    validationSchema={schema.validations}
    onSubmit={handleOnSubmit}
    render={formProps => (
      <React.Fragment>
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="personal.firstName"
          placeholder="First name"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="personal.lastName"
          placeholder="Last Name"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="contact.email"
          placeholder="Email"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          name="authentication.password"
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
              label="Sign Up"
            />
          </View>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.subtitle}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )}
  />
);

Register.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  hasFailedToSubmit: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Register;
