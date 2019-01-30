import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../../../common/components';

import { _t } from '../../../../../i18n';

const Subscription = ({ subscription, toggleSubscription, selectedSubscription }) => (
  <TouchableOpacity onPress={() => toggleSubscription(subscription)} style={styles.container}>
    <Icon.FontAwesome name="ticket" size={28} color="#4E65F6" />
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.serviceName}>{subscription.description}</Text>
        <Text style={styles.servicePrice}>${subscription.price}</Text>
        <Text style={styles.servicePrice}>{subscription.duration} {subscription.duration === 1 ? _t(`durationUnits.${subscription.durationUnit.slice(0, -1)}`) : _t(`durationUnits.${subscription.durationUnit}`)}</Text>
      </View>
      {selectedSubscription && selectedSubscription._id === subscription._id
        ? (
          <View style={styles.buttonSelected}>
            <Icon.FontAwesome name="check" color="white" size={15} />
          </View>
        )
        : null
      }
    </View>
  </TouchableOpacity>
);

Subscription.defaultProps = {
  selectedSubscription: {},
};

Subscription.propTypes = {
  toggleSubscription: PropTypes.func.isRequired,
  selectedSubscription: PropTypes.shape({}),
  subscription: PropTypes.shape({}).isRequired,
};

export default Subscription;
