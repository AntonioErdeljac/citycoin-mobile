import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loading = () => (
  <View style={styles.loading}>
    {/* <Image
      source={{ uri: 'test' }}
      style={styles.image}
    /> */}
    <ActivityIndicator color="white" />
  </View>
);

export default Loading;
