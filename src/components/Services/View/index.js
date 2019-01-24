import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import { Left, Header } from 'native-base';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import selectors from './selectors';
import styles from './styles';

import { Icon, ServiceIcon } from '../../common/components';
import actions from '../../../actions';

class ServicesView extends React.Component {
  componentDidMount() {
    const { navigation, getService } = this.props;

    getService(navigation.state.params.id);
  }

  render() {
    const { service, isLoading, hasFailedToLoad } = this.props;

    let content = <View style={styles.loading}><ActivityIndicator /></View>;

    if (!isLoading && !hasFailedToLoad && !isEmpty(service)) {
      content = (
        <View style={styles.itemWrapper}>
          <View style={styles.walletContainer}>
            <ServiceIcon service={service} color="#4E65F6" size={30} />
            <Text style={styles.serviceTitle}>{service.general.name}</Text>
          </View>
        </View>
      );
    }

    return (
      <Animatable.View animation="fadeInDown" ref={(ref) => { this.mainRef = ref; }} style={styles.container}>
        <Header transparent>
          <Left>
            <Icon.MaterialCommunityIcons name="arrow-left" size={25} color="black" />
          </Left>
        </Header>
        <ScrollView>
          {content}
        </ScrollView>
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
