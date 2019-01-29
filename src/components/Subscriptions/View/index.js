import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Left } from 'native-base';

import { BackButton, ServiceIcon } from '../../common/components';

import styles from './styles';

const SubscriptionsView = ({ navigation }) => (
  <View style={styles.container}>
    <Header transparent>
      <Left>
        <BackButton onPress={() => navigation.goBack()} />
      </Left>
    </Header>
    <View style={styles.itemWrapper}>
      <View style={styles.walletContainer}>
        <ServiceIcon service={navigation.state.params.service} color="#4E65F6" size={60} />
        <View>
          <Text style={styles.serviceTitle}>{navigation.state.params.service.general.name}</Text>
          <Text style={styles.serviceSubtitle}>{navigation.state.params.subscription.description}</Text>
        </View>
      </View>
      <View style={[styles.mt100, styles.flexCenter]}>
        <View style={{ alignSelf: 'center', backgroundColor: 'ecf0f1', borderRadius: 10, width: 300, height: 300 }}>
          <Image
            source={{ uri: 'https://cdn.qrstuff.com/images/default_qrcode.png' }}
            resizeMode="cover"
            style={{ borderRadius: 10, height: '100%', width: '100%' }}
          />
        </View>
      </View>
    </View>
  </View>
);

SubscriptionsView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SubscriptionsView;
