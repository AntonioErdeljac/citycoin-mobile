import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../../common/components';

import { _t } from '../../../../i18n';
import { servicesIcons } from '../../../../constants';

const Service = ({ service, navigation }) => {
  const IconComponent = Icon[servicesIcons[service.type].type];

  return (
    <View style={styles.container}>
      <IconComponent name={servicesIcons[service.type].icon} color="#4E65F6" size={28} />
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
};

Service.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
};

export default Service;
