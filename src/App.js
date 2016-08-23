import React, { Component } from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
