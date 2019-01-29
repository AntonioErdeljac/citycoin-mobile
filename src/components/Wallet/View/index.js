import * as Animatable from 'react-native-animatable';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Icon } from '../../common/components';

import { _t } from '../../../i18n';

class WalletView extends React.Component {
  constructor() {
    super();

    this.mainRef = React.createRef();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }}>
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
                  <Text style={styles.amountText}>$200</Text>
                </View>
                <TouchableOpacity style={styles.moneyButton}>
                  <Icon.FontAwesome name="plus" color="white" size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default WalletView;
