import React from 'react';

class Counter extends React.Component{
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { count: 0 }
  }
  handleButtonclick = () => {
    // console.log('props in handleButtonclick', this.props)
    // console.log('state in handleButtonclick', this.state)
    this.setState({ count: this.state.count + this.props.step || 1 })
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonclick} >
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter