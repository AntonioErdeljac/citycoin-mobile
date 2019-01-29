import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { Header, Left } from 'native-base';

import { BackButton, ServiceIcon } from '../../common/components';

import styles from './styles';

const SubscriptionsView = ({ navigation }) => (
  <React.Fragment>
    <Header style={{ backgroundColor: '#4E65F6', borderBottomColor: 'transparent', borderBottomWidth: 0 }}>
      <Left>
        <BackButton iconColor="white" onPress={() => navigation.goBack()} />
      </Left>
    </Header>
    <View style={styles.container}>
      <ServiceIcon service={navigation.state.params.service} color="white" size={60} />
      <Text style={{ fontFamily: 'Poppins-Bold', color: 'white', fontSize: 35, marginBottom: 15, marginTop: 15 }}>{navigation.state.params.service.general.name}</Text>
      <View style={{ height: 300, width: 300, backgroundColor: 'white', borderRadius: 10 }}>
        <Image
          style={{ height: '100%', width: '100%', borderRadius: 10 }}
          resizeMode="cover"
          source={{ uri: 'https://www.qrstuff.com/images/sample.png' }}
        />
      </View>
    </View>
  </React.Fragment>
);

SubscriptionsView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SubscriptionsView;
