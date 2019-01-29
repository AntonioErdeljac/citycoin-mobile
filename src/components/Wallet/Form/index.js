import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Left, Input as NativeInput, Item } from 'native-base';
import { CreditCardInput } from 'react-native-credit-card-single-page';

import styles from './styles';

import { Icon, SubmitButton, BackButton } from '../../common/components';

import { _t } from '../../../i18n';

import images from '../../../../assets/images';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isDisabled: true,
      amount: '',
    };

    this.mainRef = React.createRef();
  }

  onChange = (form) => {
    const { amount } = this.state;

    if (form.valid && amount.length > 0) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  render() {
    const { isSubmitting, hasFailedToSubmit, navigation } = this.props;
    const { isDisabled, amount } = this.state;

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
                  disabled={isSubmitting}
                  placeholder={_t('labels.amount')}
                  onChangeText={text => this.setState({ amount: `${text.replace(/\D/g, '')}` })}
                  value={amount}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  style={styles.input}
                  keyboardType="numeric"
                  name="amount"
                  autoCapitalize="none"
                />
              </Item>
              <SubmitButton disabled={isDisabled} style={styles.buttonMargin} label="labels.submit" />
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

WalletForm.propTypes = {
  hasFailedToSubmit: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default WalletForm;
