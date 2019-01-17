import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';

import images from '../../../../../assets/images';

class ImageLoader extends React.Component {
  constructor() {
    super();

    this.state = {
      hasLoaded: false,
    };
  }

  handleLoadEnd = () => {
    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    const { hasLoaded } = this.state;
    const { style, source } = this.props;

    return (
      <Image
        style={style}
        source={hasLoaded ? source : images.teamPlaceholder}
        onLoadEnd={this.handleLoadEnd}
      />
    );
  }
}

ImageLoader.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.shape({}).isRequired,
};

export default ImageLoader;
