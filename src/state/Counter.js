import React from 'react';

class Counter extends React.Component{
  state = { 
    count: 0
  };
  handleButtonclick = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
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