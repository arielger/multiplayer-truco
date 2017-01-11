import React, { Component } from 'react';

class WaitRoomGame extends Component {
  componentDidMount() {
    console.log('Save user as waiting user.');
  }
  componentWillUnmount() {
    console.log('User is leaving the waiting room');
  }
  render() {
    return (
      <div>
        <h1>Wait room game / Game: XXX</h1>
      </div>
    );
  }
}

export default WaitRoomGame;
