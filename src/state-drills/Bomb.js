import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.count++
      });
    }, 1000);
  }

  displayTickorTock() {
    const tick = <p>'tick'</p>;
    const tock = <p>'tock'</p>;
    const count = this.state.count;
    let tickOrTock;

    if (count % 2 === 0 && count < 8) {
      tickOrTock = tick;
    } else if (count % 2 !== 0 && count < 8) {
      tickOrTock = tock;
    } else {
      tickOrTock = <p>'BOOM!!!!'</p>;
    }
    return tickOrTock;
  }

  render() {
    console.log(this.count);
    return <div>{this.displayTickorTock()}</div>;
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

export default Bomb