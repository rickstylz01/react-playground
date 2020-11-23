import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { 
      who: "wrld"
    }
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.setState({ who: 'world' })}>World</button>
        <button onClick={() => this.setState({ who: 'friend' })}>Friend</button>
        <button onClick={() => this.setState({ who: 'react' })}>React</button>
      </div>
    )
  }
}
  //refactor buttons later to make cleaner code DRY
  // handleWorldButtonclick = () => {
  //   console.log('clicked', this.props)
  //   this.setState({ 
  //     who: "world"
  //   })
  // }
  // handleFriendButtonclick = () => {
  //   console.log('clicked', this.props)
  //   this.setState({
  //     who: "friend"
  //   })
  // }
  // handleReactButtonclick = () => {
  //   console.log('clicked', this.props)
  //   this.setState({
  //     who: "react"
  //   })
  //}
  

export default HelloWorld
