import React from 'react';

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
    
      <div>
        <h3>Business Info:</h3>
        <form className="location-form" onSubmit={this.props.postFormData}>
          <label htmlFor="name">Business Name: </label>
          <input type="text" name="name" onChange={this.props.locationDataToState}/>
          
          <label htmlFor="business_type">Business Type: </label>
          <input type="text" name="business_type" onChange={this.props.locationDataToState}/>
          
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" onChange={this.props.locationDataToState}/>
          
          <label htmlFor="latitude">Latitude: </label>
          <input type="text" name="latitude" onChange={this.props.locationDataToState}/>
          
          <label htmlFor="longitude">Longitude: </label>
          <input type="text" name="longitude" onChange={this.props.locationDataToState}/>
          
          <h3>Dropoff Details</h3>
          <label htmlFor="posting_date">Date Posted: </label>
          <input type="text" name="posting_date" onChange={this.props.postingInfoDataToState}/>
          
          <label htmlFor="posting_type">Material Posted: </label>
          <input type="text" name="posting_type" onChange={this.props.postingInfoDataToState}/>
          
          <label htmlFor="posting_occasion">Occasion: </label>
          <input type="text" name="posting_occasion" onChange={this.props.postingInfoDataToState}/>
          
          <label htmlFor="contact_name">Contact Name: </label>
          <input type="text" name="contact_name" onChange={this.props.postingInfoDataToState}/>
          
          <label htmlFor="contact_title">Contact Title: </label>
          <input type="text" name="contact_title" onChange={this.props.postingInfoDataToState}/>
          <br/><br/>
          
          <label htmlFor="notes">Notes: </label>
          <textarea rows="5" cols="50" name="notes"  size="120" onChange={this.props.postingInfoDataToState}/>
          <input type="submit" name="submit" />
          <input type="submit" name="delete" value="Delete" />
        </form>
      </div>
    )
  }
}
