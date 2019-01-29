import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';

import { Icon } from '../../common/components';

import { _t } from '../../../i18n';
import actions from '../../../actions';

class WalletView extends React.Component {
  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const { currentUser, getWallet } = this.props;

    getWallet(currentUser.walletId);
  }

  purgeView = () => {
    const { clearWalletState } = this.props;

    clearWalletState();

    this.mainRef.fadeOutUp();
  }

  loadView = () => {
    const { currentUser, getWallet } = this.props;

    getWallet(currentUser.walletId)
      .then(() => {
        this.mainRef.fadeInDown();
      });
  }

  render() {
    const { navigation, wallet, isLoading, hasFailedToLoad } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!isLoading && !hasFailedToLoad && !isEmpty(wallet)) {
      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <Icon.Entypo name="wallet" color="#4E65F6" size={60} />
            <Text style={styles.walletTitle}>{_t('labels.wallet')}</Text>
          </View>
          <View style={styles.walletBody}>
            <Icon.Entypo name="wallet" color="#4E65F6" size={28} />
            <View style={styles.walletInner}>
              <View>
                <Text style={styles.moneyText}>{_t('labels.amount')}</Text>
                <Text style={styles.amountText}>${wallet.general.amount}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('WalletForm')} style={styles.moneyButton}>
                <Icon.FontAwesome name="plus" color="white" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillBlur={this.purgeView}
          onWillFocus={this.loadView}
        />
        <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }}>
          {content}
        </Animatable.View>
      </View>
    );
  }
}

WalletView.propTypes = {
  clearWalletState: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  getWallet: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  wallet: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.wallet,
  },
)(WalletView);
