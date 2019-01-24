import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../../../common/components';

import { _t } from '../../../../../i18n';

const Subscription = ({ subscription, toggleSubscription, selectedSubscriptions }) => (
  <TouchableOpacity onPress={() => toggleSubscription(subscription._id)} style={styles.container}>
    <Icon.FontAwesome name="ticket" size={28} color="#4E65F6" />
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.serviceName}>{subscription.description}</Text>
        <Text style={styles.servicePrice}>${subscription.price}</Text>
        <Text style={styles.servicePrice}>{subscription.duration} {subscription.duration === 1 ? _t(`durationUnits.${subscription.durationUnit.slice(0, -1)}`) : _t(`durationUnits.${subscription.durationUnit}`)}</Text>
      </View>
      <View style={selectedSubscriptions.indexOf(subscription._id) !== -1 ? styles.buttonSelected : styles.button}>
        <Icon.FontAwesome name="check" color="white" size={15} />
      </View>
    </View>
  </TouchableOpacity>
);

Subscription.propTypes = {
  toggleSubscription: PropTypes.func.isRequired,
  selectedSubscriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  subscription: PropTypes.shape({}).isRequired,
};

export default Subscription;
