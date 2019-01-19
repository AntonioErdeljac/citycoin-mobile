import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import React from 'react';

class AnimatedWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.isVisible,
    };
  }

  componentWillReceiveProps(newProps) {
    const { isVisible } = this.props;

    if (!isVisible && newProps.isVisible) {
      this.setState({
        visible: true,
      }, () => {
        if (this.viewRef) {
          this.viewRef.fadeInUp();
        }
      });
    } else if (isVisible && !newProps.isVisible) {
      this.viewRef.fadeOutDown()
        .then(() => {
          this.setState({
            visible: false,
          });
        });
    }
  }

  render() {
    const { children, style } = this.props;
    const { visible } = this.state;

    if (visible) {
      return (
        <Animatable.View
          animation="fadeInUp"
          style={style}
          ref={(ref) => {
            if (ref) {
              this.viewRef = ref;
            }
          }}
        >
          {children}
        </Animatable.View>
      );
    }

    return null;
  }
}

AnimatedWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default AnimatedWrapper;
