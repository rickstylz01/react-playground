import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((s) => ({
        count: s.count + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayTickorTock() {
    const currentCount = this.state.count;
    const tick = <p>'tick'</p>;
    const tock = <p>'tock'</p>;
    let tickOrTock;

    if(currentCount >= 8) {
      tickOrTock = <p>'BOOM!!!!'</p>
    } else if (currentCount % 2 === 0) {
      tickOrTock = tick;
    } else {
      tickOrTock = tock;
    }
    return tickOrTock;
  }

  render() {
    console.log(this.state.count);
    return <div>{this.displayTickorTock()}</div>;
  }
}

export default Bomb