import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { Header, Left } from 'native-base';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';
import { Subscription } from './components';

import { BackButton, Icon } from '../../common/components';

import actions from '../../../actions';
import { _t } from '../../../i18n';

class SubscriptionsList extends React.Component {
  componentDidMount() {
    const { getUser, currentUser } = this.props;

    getUser(currentUser._id);
  }

  render() {
    const { navigation, hasFailedToLoad, isLoading, user } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!hasFailedToLoad && !isLoading && !isEmpty(user)) {
      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <Icon.FontAwesome name="ticket" color="#4E65F6" size={60} />
            <View>
              <Text style={styles.serviceTitle}>{_t('labels.subscriptions')}</Text>
            </View>
          </View>
          <View style={styles.mt30}>
            {user.subscribedServices.map(subscribedService => (
              <Subscription key={subscribedService._id} service={subscribedService.serviceId} subscription={subscribedService.subscriptionId} />
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header transparent>
          <Left>
            <BackButton navigation={navigation} />
          </Left>
        </Header>
        <ScrollView>
          {content}
        </ScrollView>
      </View>
    );
  }
}

SubscriptionsList.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  getUser: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.user,
  },
)(SubscriptionsList);
