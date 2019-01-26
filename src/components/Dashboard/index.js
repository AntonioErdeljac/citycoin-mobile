import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Right, Thumbnail, Left } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';
import { Service } from './components';

import { MenuButton, Icon } from '../common/components';

import actions from '../../actions';
import { _t } from '../../i18n';
import { paths } from '../../constants';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const { getCity } = this.props;

    getCity('5c4b09a2d81016075fd27cb5');
  }

  loadView = () => {
    const { getCity } = this.props;

    getCity('5c4b09a2d81016075fd27cb5')
      .then(() => {
        this.mainRef.fadeInDown();
      });
  }

  purgeView = () => {
    const { clearCityState } = this.props;

    this.mainRef.fadeInUp()
      .then(() => {
        clearCityState();
      });
  }

  render() {
    const { navigation, currentUser, city, isLoading, hasFailedToLoad } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    let header = <ActivityIndicator />;

    if (!hasFailedToLoad && !isLoading && !isEmpty(city)) {
      header = <Title style={styles.headerText}>{city.general.name}</Title>;
    }

    if (!hasFailedToLoad && !isLoading && !isEmpty(city)) {
      const servicesContent = city.services.map(service => (
        <Service
          navigation={navigation}
          key={service._id}
          service={service}
        />
      ));

      content = (
        <ScrollView>
          <View style={styles.itemWrapper}>
            <View style={styles.walletContainer}>
              <Text style={styles.walletTitle}>{_t('labels.wallet')}</Text>
            </View>
            <View style={styles.walletBody}>
              <Icon.Entypo name="wallet" color="#4E65F6" size={28} />
              <View style={styles.walletInner}>
                <View>
                  <Text style={styles.moneyText}>{_t('labels.amount')}</Text>
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
              {servicesContent}
            </ScrollView>
          </View>
        </ScrollView>
      );
    }

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <NavigationEvents
          onWillFocus={this.loadView}
          onWillBlur={this.purgeView}
        />
        <Header transparent>
          <Left>
            <MenuButton onPress={() => navigation.openDrawer()} left name="bars" />
          </Left>
          <Body style={styles.headerBody}>
            {header}
          </Body>
          <Right style={styles.pt5}>
            <Thumbnail
              style={styles.headerImage}
              source={{ uri: currentUser.personal.imageUrl || paths.STATIC_USER_PLACEHOLDER }}
              small
            />
          </Right>
        </Header>
        {content}
      </Animatable.View>
    );
  }
}

Dashboard.propTypes = {
  city: PropTypes.shape({}).isRequired,
  clearCityState: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  getCity: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.city,
  },
)(Dashboard);
