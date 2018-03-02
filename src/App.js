import React, { Component } from 'react';
import './App.css';
import CustomComponent from './components/MapDisplay';
import Header from './components/Header';
import LocationForm from './components/LocationForm';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          See the map below for previous drop-offs locations...
        </p>
        <CustomComponent />
        <LocationForm />
        <LocationList />
      </div>
    );
  }
}

export default App;
