import React from 'react';

class Accordian extends React.Component {
  static defaultProps = {
    sections: [],
  };
  state = {
    currentSectionIndex: null
  };

  setActiveSection(index) {
    this.setState({ currentSectionIndex: index })
  }

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button
          key={index}
          onClick={() => this.setActiveSection(index)}
        >
          {section.title}
        </button>
        {(this.state.currentSectionIndex === index) && <p>{section.content}</p>}
      </li>
    ))
  }


  render() {
    return (
      <ul>
        {this.renderButtons()}
      </ul>
    )
  }
}

export default Accordian;