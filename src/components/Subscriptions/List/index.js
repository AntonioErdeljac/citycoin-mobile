import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';

import actions from '../../../actions';

class SubscriptionsList extends React.Component {
  componentDidMount() {
    const { getUser, currentUser } = this.props;

    getUser(currentUser._id);
  }

  render() {
    return (
      <View>
        <Text />
      </View>
    );
  }
}

SubscriptionsList.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.user,
  },
)(SubscriptionsList);
