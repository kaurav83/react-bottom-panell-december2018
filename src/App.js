import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextContent from './components/TextContent';
import FixedBlock from './components/FixedBlock';

class App extends Component {

  state = {
    popup: false
  }

  constructor(props) {
    super(props);

    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  showPopup(e) {
    e.preventDefault();

    this.setState({
      popup: true
    }, () => {
      document.addEventListener('click', this.closePopup);
    });
  }

  closePopup(e) {
    if (!this.togglePopup.contains(e.target)) {
      this.setState({
        popup: false
      }, () => {
        document.removeEventListener('click', this.closePopup);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
          <TextContent />
          <FixedBlock />
        </header>
      </div>
    );
  }
}

export default App;
