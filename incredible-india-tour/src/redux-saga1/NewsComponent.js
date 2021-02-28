import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItemContainer';
import { getNews } from './reduxaction1';

class NewsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 style={{ color: 'teal' }}>Data fetched from external API call using Redux Saga</h3>
        <p></p>
        <button onClick={this.props.getNews}>Fetch</button>
        <NewsItem />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getNews: getNews,
};

export default connect(null, mapDispatchToProps)(NewsComponent)