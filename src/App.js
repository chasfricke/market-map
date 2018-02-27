import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './components/MapContainer'
class App extends Component {
  render() {
    return (
      <div>
        <h1> S&K Market Map - Denver</h1>
        <div class="map">
        <MapContainer google={this.props.google} />
        </div>
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCipWLJe9a9Iuf817K6zCa6Y1W-p6o9CfA',
})(App)
