import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import Stripe from 'react-native-stripe-api';
import { CreditCardInput } from 'react-native-credit-card-single-page';
import { Header, Left, Input as NativeInput, Item } from 'native-base';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import { Icon, SubmitButton, BackButton } from '../../common/components';

import actions from '../../../actions';
import { _t } from '../../../i18n';

import images from '../../../../assets/images';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isDisabled: true,
      amount: '',
      isLocallySubmitting: false,
    };

    this.mainRef = React.createRef();
  }

  onChange = (form) => {
    if (form.valid) {
      this.setState({
        isDisabled: false,
        form,
      });
    } else if (!form.valid) {
      this.setState({
        isDisabled: true,
      });
    }
  }

  handleSubmit = () => {
    const { form, amount } = this.state;
    const { updateWallet, currentUser, navigation } = this.props;

    const params = {
      number: form.values.number.replace(' ', ''),
      exp_month: form.values.expiry.split('/')[0],
      exp_year: form.values.expiry.split('/')[1],
      cvc: form.values.cvc,
    };

    const client = new Stripe('pk_test_PPlSAZjUuQe8RKWU4D3MyRG2');

    this.setState({
      isLocallySubmitting: true,
    }, () => {
      client.createToken(params)
        .then((result) => {
          updateWallet(currentUser.walletId, { ...result, amount })
            .then(() => navigation.navigate('WalletView'));
        });
    });
  }

  render() {
    const { navigation, isSubmitting } = this.props;
    const { isDisabled, amount, isLocallySubmitting } = this.state;

    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }}>
          <Header transparent>
            <Left>
              <BackButton onPress={() => navigation.goBack()} />
            </Left>
          </Header>
          <ScrollView>
            <View style={styles.itemWrapper}>
              <View style={styles.walletContainer}>
                <Icon.Entypo name="wallet" color="#4E65F6" size={60} />
                <Text style={styles.walletTitle}>{_t('labels.addMoney')}</Text>
              </View>
              <CreditCardInput
                cardImageFront={images.cardBg}
                cardImageBack={images.cardBg}
                onChange={this.onChange}
                labelStyle={styles.inputLabel}
                inputStyle={styles.input}
                placeholderTextColor="rgba(0,0,0,.6)"
                inputContainerStyle={styles.innerContainer}
              />
              <Item style={styles.innerContainer}>
                <NativeInput
                  placeholder={_t('labels.amount')}
                  disabled={isDisabled}
                  onChangeText={text => this.setState({ amount: `${text.replace(/\D/g, '')}` })}
                  value={amount}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  style={styles.input}
                  keyboardType="numeric"
                  name="amount"
                  autoCapitalize="none"
                />
              </Item>
              <SubmitButton isSubmitting={isSubmitting || isLocallySubmitting} onPress={this.handleSubmit} disabled={isDisabled || amount.length === 0} style={styles.buttonMargin} label="labels.submit" />
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

WalletForm.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  updateWallet: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.wallet,
  },
)(WalletForm);
