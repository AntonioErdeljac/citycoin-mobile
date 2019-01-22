import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../../common/components';

import { servicesIcons } from '../../../../constants';

const Service = ({ name, type }) => {
  const IconComponent = Icon[servicesIcons[type].type];

  return (
    <View style={styles.container}>
      <IconComponent name={type} color="#4E65F6" size={28} />
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.serviceName}>{name}</Text>
          <Text style={styles.servicePrice}>$0</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon.Entypo name="chevron-right" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Service;
