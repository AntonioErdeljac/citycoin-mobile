import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon, ServiceIcon } from '../../../common/components';

import { _t } from '../../../../i18n';

const Service = ({ service, navigation }) => (
  <View style={styles.container}>
    <ServiceIcon service={service} />
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.serviceName}>{service.general.name}</Text>
        <Text style={styles.servicePrice}>{service.subscriptions.length} {_t('labels.subscriptions')}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ServicesView', { id: service._id })} style={styles.button}>
        <Icon.Entypo name="chevron-right" color="white" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);

Service.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
};

export default Service;
