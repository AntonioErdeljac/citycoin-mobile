import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Loading = () => (
  <View style={styles.loading}>
    <Image
      source={{ uri: 'test' }}
      style={styles.image}
    />
  </View>
);

export default Loading;
