import React from 'react';

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleButtonclick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    }, 2000);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>spinning the chamber and pulling the trigger!...</p>
        <button onClick={this.handleButtonclick}>
          <p>Pull the trigger!</p>
        </button>
      </div>
    );
  }
}
