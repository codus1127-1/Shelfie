import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes'

class App extends React.Component {
  constructor() {
    super();
  }

  

  
  
  
  render() {

    return (
      <div className="App">
        <Header />
        {routes}

      </div>
    );
  }
}

export default App;
