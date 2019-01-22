import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, Body, Title, Right, Thumbnail, Left } from 'native-base';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';
import { Service } from './components';

import { MenuButton, Icon } from '../common/components';

import { _t } from '../../i18n';

class Dashboard extends React.Component {
  constructor() {
    super();

    console.log('dashboard');
  }

  render() {
    const { navigation, currentUser } = this.props;

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <Header transparent>
          <Left>
            <MenuButton onPress={() => navigation.openDrawer()} left name="bars" />
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.headerText}>Rijeka</Title>
          </Body>
          <Right style={styles.pt5}>
            <Thumbnail
              style={styles.headerImage}
              source={{ uri: 'https://avatars2.githubusercontent.com/u/23248726?s=460&v=4' }}
              small
            />
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.itemWrapper}>
            <View style={styles.walletContainer}>
              <Text style={styles.walletTitle}>{_t('labels.wallet')}</Text>
            </View>
            <View style={styles.walletBody}>
              <Icon.Entypo name="wallet" color="#4E65F6" size={28} />
              <View style={styles.walletInner}>
                <View>
                  <Text style={styles.moneyText}>{_t('labels.money')}</Text>
                  <Text style={styles.amountText}>${currentUser.wallet.amount}</Text>
                </View>
                <TouchableOpacity style={styles.moneyButton}>
                  <Icon.FontAwesome name="plus" color="white" size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itemWrapper}>
            <View style={styles.walletContainer}>
              <Text style={styles.walletTitle}>{_t('labels.services')}</Text>
            </View>
            <ScrollView style={styles.mt10}>
              <Service
                name="AutoTrolej"
                type="bus"
              />
              <Service
                name="CitiBike"
                type="bike"
              />
            </ScrollView>
          </View>
        </ScrollView>
      </Animatable.View>
    );
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  null,
)(Dashboard);
