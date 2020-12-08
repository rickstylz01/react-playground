import React from 'react';

class RouletteGun extends React.Component {
  state = { 
    chamber: null,
    spinningTheChamber: false,
  }

  handleButtonClick = () => {
    this.setState({ 
      spinningTheChamber: true
    })

    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
          <p>
          spinning the chamber and pulling the trigger!...
        </p>  
        <button onClick={this.handleButtonClick()}>
          <p>
            Pull the trigger!
          </p>
        </button>
      </div>
    )
  }
}

export default RouletteGun