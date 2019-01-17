import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Container, Content, CardItem, Card, Body, Text } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { isEmpty } from 'lodash';

import styles from './styles';

import EmptyView from '../EmptyView';
import Error from '../Error';
import ImageLoader from '../ImageLoader';
import Loading from '../Loading';

class ArticlesList extends React.Component {
  static calculateBottom = ({ layoutMeasurement, contentOffset, contentSize }) => layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;

  constructor() {
    super();

    this.state = {
      page: 1,
    };
  }

  handleScroll = (event) => {
    const { getArticles, isLoadingAdditional, query } = this.props;
    const { page } = this.state;

    if (ArticlesList.calculateBottom(event) && !isLoadingAdditional) {
      this.setState({
        page: page + 1,
      }, () => {
        const { page: newPage } = this.state;

        getArticles({ page: newPage, ...query })
          .catch(() => {
            this.setState({
              page: newPage - 1,
            });
          });
      });
    }
  }

  handleFocus = (payload) => {
    const { getArticles, navigation } = this.props;

    if (payload.action.type !== 'Navigation/BACK' && (navigation.state.params ? !navigation.state.params.isInitial : true)) {
      getArticles();
    }
  }

  purgeForm = (payload) => {
    const { clearArticlesState, articlesRoutes, navigation } = this.props;

    if (articlesRoutes.indexOf(payload.action.routeName) === -1) {
      navigation.setParams({ isInitial: false });
      this.setState({
        page: 1,
      });
      clearArticlesState();
    }
  }

  render() {
    const { articles, navigation, isLoading, hasFailedToLoad, viewRoute, isLoadingAdditional, loadOnScroll } = this.props;

    let content = <Loading />;

    if (!isLoading && hasFailedToLoad) {
      content = <Error />;
    }

    if ((!isLoading && !hasFailedToLoad) || isLoadingAdditional) {
      const items = isEmpty(articles)
        ? <EmptyView />
        : articles.map((article, key) => (
          <TouchableOpacity animation="fadeInDown" key={key} onPress={() => navigation.navigate(viewRoute, { id: article.id, url: article.url })}>
            <Card key={article.title} style={styles.card}>
              <CardItem cardBody>
                <ImageLoader
                  style={styles.cardImage}
                  source={article.imageUri}
                />
              </CardItem>
              <CardItem style={styles.cardItem}>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyText}>
                    {article.title}
                  </Text>
                  <Text note style={styles.cardBodyNote}>{moment(new Date(article.createdAt)).format('DD MMMM YYYY')}</Text>
                  {article.source && <Text note style={styles.cardBodyNote}>{article.source.title}</Text> }
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        ));

      content = (

        <Content onScroll={loadOnScroll ? ({ nativeEvent }) => this.handleScroll(nativeEvent) : () => {}}>
          <Animatable.View animation="fadeInDown">
            {items}
            {
              isLoadingAdditional
                ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="gray" />
                : null
            }
          </Animatable.View>
        </Content>
      );
    }

    return (
      <Container>
        <NavigationEvents
          onWillBlur={payload => this.purgeForm(payload)}
          onWillFocus={payload => this.handleFocus(payload)}
        />
        {content}
      </Container>
    );
  }
}

ArticlesList.defaultProps = {
  isLoadingAdditional: false,
  query: {},
  loadOnScroll: false,
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  articlesRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearArticlesState: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  hasFailedToLoad: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingAdditional: PropTypes.bool,
  loadOnScroll: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  query: PropTypes.shape({}),
  viewRoute: PropTypes.string.isRequired,
};

export default ArticlesList;
