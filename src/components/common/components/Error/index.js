import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Icon from '../Icon';

import { _t } from '../../../../i18n';

const EmptyView = () => (
  <View style={styles.loading}>
    <Icon.MaterialIcons name="error-outline" size={30} color="gray" />
    <Text style={styles.text}>
      {_t('labels.error')}
    </Text>
  </View>
);

export default EmptyView;
