import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Shimmer from 'react-native-shimmer';
import { ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

import styles from './styles';

import images from '../../../assets/images';

const Drawer = props => (
  <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
    <LinearGradient colors={['#FF416C', '#FF4B2B']} style={styles.header}>
      <View style={styles.innerContainer}>
        <Shimmer
          opacity={0.7}
        >
          <Image
            style={styles.logo}
            source={images.hksWhite}
          />
        </Shimmer>
        <Shimmer
          opacity={0.9}
          style={styles.logoShimmer}
        >
          <Text style={styles.text}>Hrvatski Karate Savez</Text>
        </Shimmer>
      </View>
    </LinearGradient>
    <SafeAreaView style={styles.safeAreaView}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <View style={styles.footer}>
      <View style={styles.flexEnd}>
        <Text style={styles.footerText}>Powered by</Text>
        <Image
          resizeMode="cover"
          source={images.signetLogo}
          style={styles.signetLogo}
        />
      </View>
    </View>
  </ScrollView>
);

export default Drawer;
