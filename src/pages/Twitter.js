import React from 'react';
import Tweet from '../components/Tweet';
import List from '../components/List';

let Twitter = React.createClass({
  render() {
    return (
      <div>
        <Tweet/>
        <List/>
      </div>
    );
  }
});

export default Twitter;