import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Tell our parent component that this player was added/removed
    this.props.handleRoster(e.target.value);
  }

  render() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <button value={this.props.id} onClick={this.handleClick}>
          {this.props.selected ? 'Remove from roster' : 'Add to roster'}
        </button>
      </div>
    );
  }
}

export default Player;
