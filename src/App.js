import React, {Component} from 'react';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import Tabs from './state-drills/Tabs';


class App extends Component {
  render() {
    const tabsProp = [
      { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'},
      { name: 'Second tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'},
      { name: 'Third tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'},
    ];

    return (
      <div className="App">
        {/*<h1>YOUR APPLICATION NAME!</h1>*/}
        {/*<Messages name="Messages" unread={0}/>*/}
        {/*<Messages name="Notifications" unread={10}/>*/}
        {/*<TheDate />*/}
        {/*<Counter count={123} step={5} />*/}

        <Tabs tabs={tabsProp}/>
      </div>
    );
  }
}

export default App;
