import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, Header } from 'native-base';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import styles from './styles';

import { Icon } from '../../common/components';
import actions from '../../../actions';

class ServicesView extends React.Component {
  componentDidMount() {
    const { navigation, getService } = this.props;

    getService(navigation.state.params.id);
  }

  render() {
    const { service } = this.props;

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <Header transparent>
          <Left>
            <Icon.MaterialCommunityIcons name="arrow-left" size={25} color="black" />
          </Left>
        </Header>
        <ScrollView>
          <View style={styles.itemWrapper}>
            <View style={styles.walletContainer}>
              <Icon.FontAwesome name="bus" color="#4E65F6" size={30} />
              <Text style={styles.serviceTitle}>{service.general && service.general.name}</Text>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    );
  }
}

ServicesView.propTypes = {
  getService: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  service: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.service,
  },
)(ServicesView);
