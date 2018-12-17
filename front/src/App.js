import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{marginTop: '30vh'}}>
        <form method="POST" enctype="multipart/form-data" action="/uploads">
          <input type="file" name="myfile"   accept="image/png" />
          <button> envoyer </button>
        </form>
      </div>
    );
  }
}

export default App;
