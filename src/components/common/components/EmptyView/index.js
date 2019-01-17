import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Icon from '../Icon';

import { _t } from '../../../../i18n';

const EmptyView = () => (
  <View style={styles.loading}>
    <Icon.MaterialIcons name="sentiment-dissatisfied" size={30} color="gray" />
    <Text style={styles.text}>
      {_t('labels.empty')}
    </Text>
  </View>
);

export default EmptyView;
