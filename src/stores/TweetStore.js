import flux from '../flux';

import TweetActions from '../actions/TweetActions';

class TweetStore {
  constructor() {
    //guardando tweets
    this.tweets = [];

    this.bindListeners({
      handleAddTweets: TweetActions.ADD_TWEET //por alguma razao, tem que ser tudo em caps e separar com underline (o original era addTweets)
    });
  }

  handleAddTweets(tweet) {
    this.tweets.push(tweet); // pega a variável tweet (o que foi escrito) e adiciona, sem "reescrever o que ja foi escrito"
  }
}

export default flux.createStore(TweetStore, 'TweetStore');