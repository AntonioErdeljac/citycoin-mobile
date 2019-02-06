import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon, ServiceIcon } from '../../../../common/components';

import { _t } from '../../../../../i18n';

const Subscription = ({ subscription, service, navigation, id }) => (
  <View style={styles.container}>
    <View style={styles.serviceNameContainer}>
      <ServiceIcon service={service} size={28} color="#4E65F6" />
      <Text style={styles.serviceTitle}>{service.general.name}</Text>
    </View>
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.serviceName}>{subscription.general.description}</Text>
        <Text style={styles.servicePrice}>${subscription.general.price}</Text>
        <Text style={styles.servicePrice}>{subscription.general.duration} {subscription.general.duration === 1 ? _t(`durationUnits.${subscription.general.durationUnit}`) : _t(`durationUnits.${subscription.general.durationUnit}s`)}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SubscriptionsView', { id })}>
        <View style={styles.buttonSelected}>
          <Icon.Ionicons name="md-qr-scanner" color="white" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

Subscription.propTypes = {
  id: PropTypes.string.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
  subscription: PropTypes.shape({}).isRequired,
};

export default Subscription;
