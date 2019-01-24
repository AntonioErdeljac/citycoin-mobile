import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, Header } from 'native-base';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';
import { Subscription } from './components';

import { Icon, ServiceIcon } from '../../common/components';
import actions from '../../../actions';
import { _t } from '../../../i18n';

class ServicesView extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedSubscriptions: [],
    };
  }

  componentDidMount() {
    const { navigation, getService } = this.props;

    getService(navigation.state.params.id);
  }

  toggleSubscription = (id) => {
    const { selectedSubscriptions } = this.state;

    const newSelectedSubscriptions = selectedSubscriptions.indexOf(id) === -1
      ? [id, ...selectedSubscriptions]
      : selectedSubscriptions.filter(subscriptionId => subscriptionId !== id);

    this.setState({
      selectedSubscriptions: newSelectedSubscriptions,
    });
  }

  render() {
    const { service, isLoading, hasFailedToLoad } = this.props;
    const { selectedSubscriptions } = this.state;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!isLoading && !hasFailedToLoad && !isEmpty(service)) {
      const subscriptionsContent = service.subscriptions.map(subscription => (
        <Subscription toggleSubscription={this.toggleSubscription} selectedSubscriptions={selectedSubscriptions} subscription={subscription} key={subscription._id} />
      ));

      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <ServiceIcon service={service} color="#4E65F6" size={60} />
            <View>
              <Text style={styles.serviceTitle}>{service.general.name}</Text>
              <Text style={styles.serviceSubtitle}>{service.subscriptions.length} {_t('labels.subscriptions')}</Text>
            </View>
          </View>
          <View style={styles.mt30}>
            {subscriptionsContent}
          </View>
        </View>
      );
    }

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <Header transparent hasTabs>
          <Left>
            <Icon.MaterialCommunityIcons name="arrow-left" size={25} color="black" />
          </Left>
        </Header>
        <ScrollView>
          {content}
        </ScrollView>
        <TouchableOpacity style={selectedSubscriptions.length > 0 ? styles.footerButton : styles.footerButtonDisabled} disabled={selectedSubscriptions.length === 0}>
          <Text style={styles.footerButtonText}>{_t('labels.confirm')}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

ServicesView.propTypes = {
  getService: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.service,
  },
)(ServicesView);
