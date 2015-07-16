import React from 'react';
import TweetStore from '../stores/TweetStore';

let List = React.createClass({
  getInitialState() {
    return {
      tweetList: TweetStore.getState().tweets
    };
  },

  //componentDidMount roda toda vez que a tela for desenhada no browser
  componentDidMount() {
    TweetStore.listen(this.onChange);
  },

  //componentWillUnmount roda toda vez que mudar de tela e for 'destruir' o componente
  componentWillUnmount() {
    //apagar lixo da memória
    TweetStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState({tweetList: state.tweets});
  },

  render() {
    return (
      <ul>
        {this.state.tweetList.map( (tweet, index) => {
          console.log(tweet);
          return (<li key={index}>{tweet}</li>);
        })}
      </ul>
    );
  }
});


export default List;