import React from 'react';
import TweetActions from '../actions/TweetActions';

let Tweet = React.createClass({
  getInitialState() {
    return {
      tweet: '' 
    }; //return de objeto nao precisa de parenteses (mas pode ter)

  },

  handleSubmit(e) {
    e.preventDefault(); //NAO DEIXA ATUALIZAR QD ACONTECE ALGO
    TweetActions.addTweet(this.state.tweet);
    this.setState({tweet:''});
  },

  handleChange(e){
    this.setState({tweet: e.target.value});
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}> {/* tambem pode ser feito trocando form por div e colocando a açao direto na tag do button */}
        <input type="text" placeholder="EU SOU UM INPUT DEFAULT ESCREVE AQUI" value={this.state.tweet} onChange={this.handleChange}/>
        <button type="submit" className="btn btn-info">ENVIAR</button>
      </form>
    );
  }
});

export default Tweet;
