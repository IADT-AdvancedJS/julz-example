import React, { Component } from 'react';
import Player from './Player';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{name: 'Kobe', rostered: false},
                  {name: 'Steph', rostered: false},
                  {name: 'Lebron', rostered: false},
                  {name: 'Kyrie', rostered: false} ]};
    this.handleRoster = this.handleRoster.bind(this);
  }

  handleRoster(id){
    this.setState(prevState => {
      prevState.players[id].rostered = !prevState.players[id].rostered;
      return prevState;
    });
  }

  render() {
    // Generate components for all players
    let players = this.state.players.map( (p,i) => {
      return <Player key={i} id={i} name={p.name} selected={p.rostered} handleRoster={this.handleRoster}/>
    });

    // Generate components for players on the roster
    let roster = this.state.players.map( (p,i) => {
      return p.rostered ? <Player key={i} id={i} name={p.name} selected={p.rostered} handleRoster={this.handleRoster}/> : null;
    });

    return (
      <div>
        <h1>Players</h1>
        {players}
        <h1>Current Roster</h1>
        {roster}
      </div>
    );
  }
}

export default App;
