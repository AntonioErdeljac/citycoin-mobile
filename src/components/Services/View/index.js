import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, Header } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

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
      selectedSubscription: undefined,
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
          selectedSubscription: null,
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
          selectedSubscription: null,
          showCheckoutForm: false,
          isBuying: false,
        });
        clearServiceData();
        navigation.navigate('Dashboard');
      });
  }

  toggleSubscription = (subscription) => {
    this.setState({
      selectedSubscription: subscription,
    });
  }

  handleConfirm = () => {
    this.setState({
      showCheckoutForm: true,
    });
  }

  handleBuy = () => {
    const { service, subscribe, navigation } = this.props;
    const { selectedSubscription } = this.state;

    this.setState({
      isBuying: true,
    }, () => {
      subscribe(service._id, selectedSubscription._id)
        .then(({ result }) => {
          this.setState({
            isBuying: false,
          }, () => {
            navigation.navigate('SubscriptionsView', { id: result.data._id });
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
    const { selectedSubscription, showCheckoutForm, isBuying } = this.state;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!isLoading && !hasFailedToLoad && !isEmpty(service)) {
      const subscriptionsContent = service.subscriptions.map(subscription => (
        <Subscription toggleSubscription={this.toggleSubscription} selectedSubscription={selectedSubscription} subscription={subscription} key={subscription._id} />
      ));

      const checkoutForm = selectedSubscription
        ? (
          <View style={styles.formContainer}>
            <View style={styles.formItem}>
              <View>
                <Text style={styles.formItemTitle}>{selectedSubscription.description}</Text>
                <Text style={styles.formItemSubtitle}>
                  {selectedSubscription.duration} {selectedSubscription.duration === 1 ? _t(`durationUnits.${selectedSubscription.durationUnit.slice(0, -1)}`) : _t(`durationUnits.${selectedSubscription.durationUnit}`)}
                </Text>
              </View>
              <View>
                <Text style={styles.formItemPrice}>${selectedSubscription.price}</Text>
              </View>
            </View>
            <View style={styles.formTotal}>
              <Text style={styles.formItemTitle}>{_t('labels.total')}</Text>
              <Text style={styles.formItemPrice}>${selectedSubscription.price}</Text>
            </View>
          </View>
        )
        : null;

      const innerContent = showCheckoutForm && selectedSubscription
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
        <TouchableOpacity onPress={showCheckoutForm ? this.handleBuy : this.handleConfirm} style={selectedSubscription ? styles.footerButton : styles.footerButtonDisabled} disabled={!selectedSubscription}>
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
