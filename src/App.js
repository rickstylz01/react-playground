import React, {Component} from 'react';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter />
      </div>
    );
  }
}

export default App;
