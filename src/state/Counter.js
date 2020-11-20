import React from 'react';

class Counter extends React.Component{
  state = { 
    count: 0
  };
  handleButtonclick() {
    console.log('clicked!')
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonclick}>
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter