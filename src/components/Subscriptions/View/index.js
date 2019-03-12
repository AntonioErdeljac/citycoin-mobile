import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import { Header, Left } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';

import { BackButton, ServiceIcon } from '../../common/components';

import actions from '../../../actions';

class SubscriptionsView extends React.Component {
  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const { getSubscribedService, navigation } = this.props;

    getSubscribedService(navigation.state.params.id)
      .then(() => {
        this.mainRef.fadeOutUp();
      });
  }

  loadView = () => {
    const { getSubscribedService, navigation } = this.props;

    getSubscribedService(navigation.state.params.id)
      .then(() => {
        this.mainRef.fadeInDown();
      });
  }

  purgeView = () => {
    const { clearSubscribedServiceState } = this.props;

    clearSubscribedServiceState();
  }

  render() {
    const { subscribedService, navigation, isLoading, hasFailedToLoad } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!hasFailedToLoad && !isLoading && !isEmpty(subscribedService)) {
      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <ServiceIcon service={subscribedService.serviceId} color="#4E65F6" size={60} />
            <View>
              <Text style={styles.serviceTitle}>{subscribedService.serviceId.general.name}</Text>
              <Text style={styles.serviceSubtitle}>{subscribedService.subscriptionId.description}</Text>
            </View>
          </View>
          <View style={[styles.mt100, styles.flexCenter]}>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Image
                source={{ uri: 'link-to-img' }}
              />
            </View>
            <View style={{ backgroundColor: '#4E65F6', borderRadius: 20, padding: 20 }}>
              <QRCode
                value={subscribedService._id}
                size={200}
                backgroundColor="#4E65F6"
                color="white"
              />
            </View>
          </View>
        </View>
      );
    }

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <NavigationEvents
          onWillBlur={this.purgeView}
          onWillFocus={this.loadView}
        />
        <Header transparent>
          <Left>
            <BackButton onPress={() => navigation.goBack()} />
          </Left>
        </Header>
        {content}
      </Animatable.View>
    );
  }
}

SubscriptionsView.propTypes = {
  clearSubscribedServiceState: PropTypes.func.isRequired,
  getSubscribedService: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  subscribedService: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.subscribedService,
  },
)(SubscriptionsView);
