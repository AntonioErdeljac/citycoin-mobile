import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity } from 'react-native';

import schema from './schema';

import styles from '../../styles';

import { SubmitButton, Input } from '../../../common/components';
import { _t } from '../../../../i18n';

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
          placeholder="labels.firstName"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="personal.lastName"
          placeholder="labels.lastName"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="personal.nin"
          placeholder="labels.nin"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          disabled={isSubmitting}
          name="contact.email"
          placeholder="labels.email"
          hasFailedToSubmit={hasFailedToSubmit}
        />
        <Input
          {...formProps}
          name="authentication.password"
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
              label="labels.signUp"
            />
          </View>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.subtitle}>{_t('labels.existingAccount')}</Text>
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
