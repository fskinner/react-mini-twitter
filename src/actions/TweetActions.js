import flux from '../flux';

class TweetActions {
  addTweet(tweet) {
    this.dispatch(tweet);
  }
}

export default flux.createActions(TweetActions);