import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';
import { City } from './components';

import { Icon } from '../../common/components';

import actions from '../../../actions';
import { _t } from '../../../i18n';

class CitiesList extends React.Component {
  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  // componentDidMount() {
  //   const { getUser, currentUser } = this.props;

  //   getUser(currentUser._id);
  // }

  // loadList = () => {
  //   const { getCities } = this.props;

  //   getCities(currentUser._id)
  //     .then(() => {
  //       this.mainRef.fadeInDown();
  //     });
  // }

  purgeList = () => {
    this.mainRef.fadeOutUp();
  }

  handleLoadCity = (id) => {
    const { getCity, navigation } = this.props;

    getCity(id)
      .then(() => {
        navigation.navigate('Dashboard');
      });
  }

  render() {
    const { hasFailedToLoad, isLoading, cities, totalCities } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!hasFailedToLoad && !isLoading && !isEmpty(cities)) {
      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <Icon.MaterialCommunityIcons name="city-variant" color="#4E65F6" size={60} />
            <View>
              <Text style={styles.serviceTitle}>{_t('labels.cities')}</Text>
              <Text style={styles.walletSubtitle}>{totalCities} {_t('labels.totalCities')}</Text>
            </View>
          </View>
          <View style={styles.mt30}>
            {cities.map(city => (
              <City key={city._id} onPress={id => this.handleLoadCity(id)} city={city} />
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <NavigationEvents />
        <Animatable.View ref={(ref) => { this.mainRef = ref; }}>
          <ScrollView>
            {content}
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getCity: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  totalCities: PropTypes.number.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.cities,
    ...actions.city,
  },
)(CitiesList);
