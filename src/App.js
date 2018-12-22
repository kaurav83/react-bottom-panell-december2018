import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextContent from './components/TextContent';
import FixedBlock from './components/FixedBlock';
import Modal from './components/Modal/Modal';



class App extends Component {

  state = {
    popup: false,
    modal: false,
    toggle: 0,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let cli = this.cli;
    this.toggle.onload = function() {
      let styleH = this.height + 'px';
      let styleW = this.width + 'px';

      cli.style.height = styleH;
      cli.style.width = styleW;
       
    }
    
  }

  modalHandler() {
    this.setState({modal: true});
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

          <img  
            src={require('./Mockup-Generated-by-Dunnnk.jpg')} 
            ref={elem => {
              this.toggle = elem
            }}
          />
          <img 
            src={require('./screenSocialDev.png')} 
            ref={elem => {
              this.cli = elem
            }}
          />
          <Modal show={this.state.modal}>
            Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. Modal window, it have to help me with my task. 
          </Modal>
          <button
            className="OrderButton"
            onClick={this.modalHandler.bind(this)}
            // onClick={}
          >ORDER NOW</button>
          <TextContent />
          <FixedBlock />
        </header>
      </div>
    );
  }
}

export default App;
