import * as Animatable from 'react-native-animatable';
import HTMLView from 'react-native-htmlview';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Body, Text, CardItem, Content, Container } from 'native-base';
import { NavigationEvents } from 'react-navigation';

import styles from './styles';

import Error from '../Error';
import ImageLoader from '../ImageLoader';
import Loading from '../Loading';

class ArticlesView extends React.Component {
  static renderNode = (node, values) => {
    if (node.name === 'img') {
      if (node.attribs.src === values.imageUri.uri) {
        return null;
      }
    }

    return undefined;
  }

  componentDidMount() {
    const { getArticle } = this.props;

    getArticle();
  }

  purgeView = () => {
    const { clearArticleState } = this.props;

    clearArticleState();
  }

  render() {
    const { initialValues, hasFailedToLoad, isLoading, renderHtml } = this.props;

    let content = <Loading />;

    if (hasFailedToLoad) {
      content = <Error />;
    }

    if (!isLoading && !hasFailedToLoad) {
      content = (
        <Animatable.View animation="fadeInDown" style={styles.card}>
          <CardItem cardBody>
            <ImageLoader
              style={styles.cardImage}
              source={initialValues.imageUri}
            />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Body>
              <Text style={styles.cardTitle}>{initialValues.title}</Text>
              <Text note>{moment(new Date(initialValues.createdAt)).format('DD MMMM YYYY')}</Text>
              <Text note>{initialValues.source && initialValues.source.title}</Text>
            </Body>
          </CardItem>
          <CardItem style={styles.cardItemSecondary}>
            <Body>
              {
                renderHtml
                  ? (
                    <HTMLView
                      textComponentProps={{ style: { fontFamily: 'WorkSans-Light' } }}
                      renderNode={node => ArticlesView.renderNode(node, initialValues)}
                      value={initialValues.description}
                    />
                  )
                  : (
                    <Text
                      style={styles.cardBodyText}
                    >
                      {initialValues.description}
                    </Text>
                  )
              }

            </Body>
          </CardItem>
        </Animatable.View>
      );
    }

    return (
      <Container style={styles.container}>
        <NavigationEvents
          onWillBlur={this.purgeView}
        />
        <Content>
          {content}
        </Content>
      </Container>
    );
  }
}

ArticlesView.defaultProps = {
  renderHtml: false,
};

ArticlesView.propTypes = {
  renderHtml: PropTypes.bool,
  clearArticleState: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default ArticlesView;
