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

    setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    }, 2000);
  }

  render() {
    let invite = "Ready to play?";

    if(this.state.spinningTheChamber === true) {
      invite = "spinning the chamber and pulling the trigger! ..."
    } else if (this.state.chamber === this.props.bulletInChamber) {
      invite = "BANG!!!!"
    }

    return (
      <div>
          <p>
            {invite}
          </p>  
          <button onClick={this.handleButtonClick}>
            <p>
              Pull the trigger!
            </p>
          </button>
      </div>
    )
  }
}

export default RouletteGun