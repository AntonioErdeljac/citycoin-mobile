import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

import styles from './styles';

const Drawer = props => (
  <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
    <SafeAreaView style={styles.safeAreaView}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default Drawer;
