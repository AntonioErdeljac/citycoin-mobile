import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

import styles from './styles';

const Drawer = props => (
  <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
    <LinearGradient colors={['#FF416C', '#FF4B2B']} style={styles.header}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Hrvatski Karate Savez</Text>
      </View>
    </LinearGradient>
    <SafeAreaView style={styles.safeAreaView}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default Drawer;
