import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, Header } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty, find } from 'lodash';

import selectors from './selectors';
import styles from './styles';
import { Subscription } from './components';

import { ServiceIcon, BackButton } from '../../common/components';
import actions from '../../../actions';
import { _t } from '../../../i18n';

class ServicesView extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedSubscriptions: [],
      showCheckoutForm: false,
      isBuying: false,
    };

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const { navigation, getService } = this.props;

    getService(navigation.state.params.id);
  }

  loadView = () => {
    const { navigation, getService } = this.props;

    getService(navigation.state.params.id)
      .then(() => {
        this.mainRef.fadeInDown();
      });
  }

  purgeView = () => {
    const { clearServiceData } = this.props;

    this.mainRef.fadeOutUp()
      .then(() => {
        this.setState({
          selectedSubscriptions: [],
          showCheckoutForm: false,
          isBuying: false,
        });
        clearServiceData();
      });
  }

  purgeNavigate = () => {
    const { navigation, clearServiceData } = this.props;

    this.mainRef.fadeOutUp()
      .then(() => {
        this.setState({
          selectedSubscriptions: [],
          showCheckoutForm: false,
          isBuying: false,
        });
        clearServiceData();
        navigation.navigate('Dashboard');
      });
  }

  toggleSubscription = (subscription) => {
    const { selectedSubscriptions } = this.state;

    const existingSelectedSubscription = find(selectedSubscriptions, { _id: subscription._id });

    const newSelectedSubscriptions = existingSelectedSubscription
      ? selectedSubscriptions.filter(foundSubscription => foundSubscription._id !== subscription._id)
      : selectedSubscriptions.concat(subscription);

    this.setState({
      selectedSubscriptions: newSelectedSubscriptions,
    });
  }

  handleConfirm = () => {
    this.setState({
      showCheckoutForm: true,
    });
  }

  handleBuy = () => {
    const { subscribe, service, navigation } = this.props;
    const { selectedSubscriptions } = this.state;

    this.setState({
      isBuying: true,
    }, () => {
      Promise.all(selectedSubscriptions.map(subscription => subscribe(service._id, subscription._id)))
        .then(() => {
          this.setState({
            isBuying: false,
          }, () => {
            navigation.navigate('SubscriptionsList');
          });
        })
        .catch(() => {
          this.setState({
            isBuying: false,
          }, () => {
            navigation.navigate('WalletView');
          });
        });
    });
  }

  render() {
    const { service, isLoading, hasFailedToLoad } = this.props;
    const { selectedSubscriptions, showCheckoutForm, isBuying } = this.state;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!isLoading && !hasFailedToLoad && !isEmpty(service)) {
      const subscriptionsContent = service.subscriptions.map(subscription => (
        <Subscription toggleSubscription={this.toggleSubscription} selectedSubscriptions={selectedSubscriptions} subscription={subscription} key={subscription._id} />
      ));

      const checkoutForm = (
        <View style={styles.formContainer}>
          {selectedSubscriptions.map(subscription => (
            <View key={subscription._id} style={styles.formItem}>
              <View>
                <Text style={styles.formItemTitle}>{subscription.description}</Text>
                <Text style={styles.formItemSubtitle}>{subscription.duration} {subscription.duration === 1 ? _t(`durationUnits.${subscription.durationUnit.slice(0, -1)}`) : _t(`durationUnits.${subscription.durationUnit}`)}</Text>
              </View>
              <View>
                <Text style={styles.formItemPrice}>${subscription.price}</Text>
              </View>
            </View>
          ))}
          <View style={styles.formTotal}>
            <Text style={styles.formItemTitle}>{_t('labels.total')}</Text>
            <Text style={styles.formItemPrice}>${selectedSubscriptions.length > 1 ? selectedSubscriptions.reduce((current, next) => current.price + next.price) : (selectedSubscriptions.length > 0 && selectedSubscriptions[0].price)}</Text>
          </View>
        </View>
      );

      const innerContent = showCheckoutForm
        ? checkoutForm
        : subscriptionsContent;

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
            {innerContent}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={this.loadView}
        />
        <Animatable.View ref={(ref) => { this.mainRef = ref; }}>
          <Header transparent>
            <Left>
              <BackButton onPress={this.purgeNavigate} />
            </Left>
          </Header>
          <ScrollView>
            {content}
          </ScrollView>
        </Animatable.View>
        <TouchableOpacity onPress={showCheckoutForm ? this.handleBuy : this.handleConfirm} style={selectedSubscriptions.length > 0 ? styles.footerButton : styles.footerButtonDisabled} disabled={selectedSubscriptions.length === 0}>
          {isBuying
            ? <ActivityIndicator />
            : <Text style={styles.footerButtonText}>{showCheckoutForm ? _t('labels.purchase') : _t('labels.confirm')}</Text>
            }
        </TouchableOpacity>
      </View>
    );
  }
}

ServicesView.propTypes = {
  clearServiceData: PropTypes.func.isRequired,
  getService: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
  subscribe: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.service,
  },
)(ServicesView);
