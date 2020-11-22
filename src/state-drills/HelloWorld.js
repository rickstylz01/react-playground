import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { 
      who: "world"
    }
  }
  //refactor buttons later to make cleaner code DRY
  handleWorldButtonclick = () => {
    console.log('clicked', this.props)
    this.setState({ 
      who: "world"
    })
  }
  handleFriendButtonclick = () => {
    console.log('clicked', this.props)
    this.setState({
      who: "friend"
    })
  }
  handleReactButtonclick = () => {
    console.log('clicked', this.props)
    this.setState({
      who: "react"
    })
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleWorldButtonclick}>World</button>
        <button onClick={this.handleFriendButtonclick}>Friend</button>
        <button onClick={this.handleReactButtonclick}>React</button>
      </div>
    )
  }
}

export default HelloWorld