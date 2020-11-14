import React from 'react';

class Counter extends React.Component {
  static defaultProps = { step: 3}
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
      count: 0,
      name: 'gino', 
      step: 5
    };
  }
  handleButtonClick = () => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({
      count: this.state.count + this.state.step
    })
  }
  greet = () => {
    alert('Hello ' + this.state.name)
  }
  render() {
    return(
      <div>
        <p>The currnet count: {this.state.count}</p>
        <button onClick={ this.handleButtonClick }>
          Add 1
        </button>
        <button onClick={ this.greet }>
          Greet!
        </button>
      </div>
    )
  }
}

export default Counter