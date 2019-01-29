import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SubscriptionsView = () => (
  <View style={styles.container}>
    <View style={{ height: 300, width: 300, backgroundColor: 'white', borderRadius: 10 }} />
    <Text style={{ fontFamily: 'Poppins-Bold', color: 'white', fontSize: 20, marginTop: 15 }}> 10 minutes remaining </Text>
  </View>
);

export default SubscriptionsView;
