import React, { Component } from 'react';
import './App.css';
import MapLayers from './MapLayers';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          See the map below...
        </p>
        <MapLayers />
      </div>
    );
  }
}

export default App;
