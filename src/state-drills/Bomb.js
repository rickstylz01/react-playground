import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.count++
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>"tick"</p>
      </div>
    )
  }

}

export default Bomb