import React from 'react';

class Accordian extends React.Component {
  static defaultProps = {
    sections: [],
  };
  state = {
    currentTabIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentTabIndex: index })
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <ul key={index}>
        <li key={index}>
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
        </li>
      </ul>
    ))
  }
  renderContent() {
    // const currentTab = this.props.sections[this.state.currentTabIndex]
    return (
      <div className='content'>
        <p>p</p>
      </div>
    )
  }

render() {
  return (
    <div>
      {this.renderButtons()}
      {this.props.sections.length && this.renderContent()}
    </div>
  )
}
}

export default Accordian;