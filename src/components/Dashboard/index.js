import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import selectors from './selectors';
import styles from './styles';
import { Service } from './components';

import { Icon } from '../common/components';

import actions from '../../actions';
import { _t } from '../../i18n';

class Dashboard extends React.Component {
  static navigationOptions = () => ({
    drawerLabel: _t('navigation.home'),
    drawerIcon: props => <Icon.FontAwesome name="home" size={25} {...props} />,
  })

  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const { getCity } = this.props;

    getCity('5c5052cf0200e81d16875d55');
  }

  loadView = () => {
    const { getCity } = this.props;

    getCity('5c5052cf0200e81d16875d55')
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
    const { navigation, city, isLoading, hasFailedToLoad } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

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
              <Text style={styles.walletTitle}>{_t('labels.allServices')}</Text>
            </View>
            <ScrollView style={[styles.mt10]}>
              {servicesContent}
            </ScrollView>
          </View>
        </ScrollView>
      );
    }

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={this.loadView}
        />
        <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }}>
          {content}
        </Animatable.View>
      </View>
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
