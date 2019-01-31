import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../../../common/components';

import { _t } from '../../../../../i18n';

const City = ({ city, onPress }) => (
  <View style={styles.container}>
    <View style={styles.serviceNameContainer}>
      <Icon.MaterialCommunityIcons name="city-variant" size={28} color="#4E65F6" />
      <Text style={styles.serviceTitle}>{city.general.name}</Text>
    </View>
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.servicePrice}>{city.services.length} {_t('labels.services')}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(city._id)}>
        <View style={styles.buttonSelected}>
          <Icon.Entypo name="chevron-right" color="white" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

City.propTypes = {
  onPress: PropTypes.func.isRequired,
  city: PropTypes.shape({}).isRequired,
};

export default City;
