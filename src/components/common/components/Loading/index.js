import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import images from '../../../../../assets/images';

const Loading = () => (
  <View style={styles.loading}>
    <Image
      source={images.loading}
      style={styles.image}
    />
  </View>
);

export default Loading;
