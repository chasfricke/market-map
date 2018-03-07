import React, { Component } from 'react';
import './App.css';
import MapDisplay from './components/MapDisplay';
import Header from './components/Header';
import LocationForm from './components/LocationForm';
import LocationList from './components/LocationList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [], posting_info: [], 
      locationId: null,
    };
    this.locationDataToState = this.locationDataToState.bind(this);
    this.postingInfoDataToState = this.postingInfoDataToState.bind(this);
    this.postFormData = this.postFormData.bind(this);
  }
  
  componentDidMount(){
    this.getLocations();
    this.getPostingInfo();
  }

  getLocations = () => {
    return fetch("http://localhost:8080/locations")
    .then(response => response.json())
    .then(locations => this.setState({locations}))
  }  

  getPostingInfo = () => {
    return fetch("http://localhost:8080/posting_info")
    .then(response => response.json())
    .then(posting_info => this.setState({posting_info}))
  } 

  locationDataToState(event) {
    const data = this.state.location || {}
    Object.assign(data, {
      [event.target.name]: event.target.value
    })
    this.setState({location: data})
  }

  postingInfoDataToState(event) {
    const data = this.state.postingInfo || {}
    Object.assign(data, {
      [event.target.name]: event.target.value
    })
    this.setState({postingInfo: data})
  }
  

  postFormData = (event) => {
    event.preventDefault();
    const apiURL_locations = "http://localhost:8080/locations";
    const apiURL_posting_info = "http://localhost:8080/posting_info";
  
    let locationData = {
      "name": this.state.location.name,
      "business_type": this.state.location.business_type,
      "address": this.state.location.address,
      "latitude": this.state.location.latitude,
      "longitude": this.state.location.longitude
    };
    
    let postingInfoData = {
      "posting_date": this.state.postingInfo.posting_date,
      "posting_type": this.state.postingInfo.posting_type,
      "posting_occasion": this.state.postingInfo.posting_occasion,
      "contact_name": this.state.postingInfo.contact_name,
      "contact_title": this.state.postingInfo.contact_title,
      "notes": this.state.postingInfo.notes
    };

    fetch(apiURL_locations, {
      method: "POST",
      headers: new Headers({
          "Content-Type": "application/json"
      }),
      body: JSON.stringify(locationData)
      })
      .then(response => {
        if (!response.ok) {
          console.error(response.statusText);
        };
        return response.json();
      })

    fetch(apiURL_posting_info, {
      method: "POST",
      headers: new Headers({
          "Content-Type": "application/json"
      }),
      body: JSON.stringify(postingInfoData)
      })
      .then(response => {
        if (!response.ok) {
          console.error(response.statusText);
        };
        return response.json();
      })
    };
   
  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          See the map below for previous drop-offs locations...
        </p>
        <MapDisplay />
        <LocationForm locationDataToState={this.locationDataToState}  postingInfoDataToState={this.postingInfoDataToState} postFormData={this.postFormData} />
        <LocationList locations={this.state.locations} posting_info={this.state.posting_info} />
      </div>
      
    );
  }
}

export default App;
