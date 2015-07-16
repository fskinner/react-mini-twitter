import React from 'react';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

let App = React.createClass({
  render() {
    return (
      <DocumentTitle title="MiniTwitter">
        <RouteHandler/>
      </DocumentTitle>
    );
  }
});

export default App;
